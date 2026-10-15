"use client";

import { useState, useEffect, useCallback } from "react";
import { mockPokemonData } from "../lib/mockData";

// Helper to normalize effectiveness data (supports array from mockData and object from Go API)
const normalizeEffectiveness = (eff) => {
  if (!eff) return {};
  if (Array.isArray(eff)) {
    const obj = {};
    eff.forEach((item) => {
      Object.keys(item).forEach((key) => {
        obj[key] = item[key];
      });
    });
    return obj;
  }
  return eff;
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("charizard,venusaur");
  const [apiUrl, setApiUrl] = useState("http://localhost:8080");
  // const [useMockData, setUseMockData] = useState(false);
  const [isSimpleMode, setIsSimpleMode] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Track selected Mega form for each slot index: { [slotIndex]: 'standard' | 'x' | 'y' | 'mega' }
  const [activeForms, setActiveForms] = useState({});

  // Helper to parse comma separated names
  const parseNames = useCallback((query) => {
    return query
      .split(",")
      .map((name) => name.trim().toLowerCase())
      .filter((name) => name.length > 0);
  }, []);

  // Fetch or mock team analysis
  const handleAnalyze = useCallback(
    async (e) => {
      if (e) e.preventDefault();
      setLoading(true);
      setError(null);

      const pokemonNames = parseNames(searchQuery);

      if (pokemonNames.length > 100) {
        setError(
          "Please enter maximum of 100 Pokémon names separated by commas.",
        );
        setLoading(false);
        return;
      }

      // Reset active forms state for a new search
      setActiveForms({});

      try {
        const fullUrl = `${apiUrl}/api/v1/team-info?pokemons=${pokemonNames.join(",")}`;
        const res = await fetch(fullUrl);
        if (!res.ok) {
          throw new Error(`API responded with status code ${res.status}`);
        }
        const json = await res.json();
        if (json && json.data) {
          setPokemonList(json.data);
        } else {
          throw new Error(
            "Invalid API response format: 'data' property missing.",
          );
        }
      } catch (err) {
        console.error(err);
        setError(
          `Failed to fetch from API: ${err.message}. Displaying local mock fallback where names match.`,
        );
        // Fallback matching to keep user experience seamless
        const fallbackData = pokemonNames.map((name) => {
          const found = mockPokemonData.data.find(
            (p) => p.name && p.name.toLowerCase() === name,
          );
          return found ? found : {};
        });
        setPokemonList(fallbackData);
      } finally {
        setLoading(false);
      }
    },
    [searchQuery, apiUrl, parseNames],
  );

  // Initial load
  useEffect(() => {
    handleAnalyze();
  }, []);

  // Helper to format float values to percentages (e.g. 0.981 -> 98.1%)
  const formatPercent = (val) => {
    if (val === undefined || val === null) return "0%";
    return `${(val * 100).toFixed(1)}%`;
  };

  // Helper to format category labels
  const getMoveCategoryLabel = (category) => {
    if (!category) return "status";
    return category.toLowerCase();
  };

  const formatLabel = (value) =>
    value.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div>
      {/* Top Header */}
      <header className="header-container">
        <h1 className="title-main">Pokémon Champions Analyzer</h1>
        <p className="subtitle-main">
          Analyze base stats, alignments, moves, and mega configurations for a
          six-member team.
        </p>

        {/* Control and Input Panel */}
        <form className="control-panel" onSubmit={handleAnalyze}>
          <div className="input-row">
            <div className="search-input-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Enter 6 Pokémon separated by commas (e.g. charizard, garchomp, venusaur...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                disabled={loading}
              />
            </div>
            <button type="submit" className="search-btn" disabled={loading}>
              {loading ? (
                <>
                  <span
                    className="loading-spinner"
                    style={{
                      width: "16px",
                      height: "16px",
                      borderTopColor: "#fff",
                    }}
                  ></span>
                  Analyzing...
                </>
              ) : (
                "Analyze Team"
              )}
            </button>
          </div>

          <div className="config-row">
            <div className="api-url-wrapper">
              <span className="api-url-label">API Endpoints:</span>
              <input
                type="text"
                className="api-url-input"
                placeholder="http://localhost:8080"
                value={apiUrl}
                onChange={(e) => setApiUrl(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className="toggle-container">
              <span className="switch-label">Simplified Mode:</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isSimpleMode}
                  onChange={(e) => setIsSimpleMode(e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </form>
      </header>

      {/* Main Analysis Container */}
      <main className={`dashboard-stack ${isSimpleMode ? "simple-mode" : ""}`}>
        {error && <div className="error-wrapper">{error}</div>}

        {loading && (
          <div className="loading-wrapper">
            <div className="loading-spinner"></div>
            <p style={{ color: "var(--text-secondary)" }}>
              Gathering battle data from regional champions...
            </p>
          </div>
        )}

        {!loading && pokemonList.length === 0 && (
          <div className="empty-state">
            <h2 className="empty-state-title">No Pokémon Team Loaded</h2>
            <p>
              Enter 6 Pokémon in the text field above and click "Analyze Team"
              to generate dashboard reports.
            </p>
          </div>
        )}

        {!loading &&
          pokemonList.length > 0 &&
          pokemonList.map((pokemon, idx) => {
            const isEmpty = !pokemon || Object.keys(pokemon).length === 0;

            if (isEmpty) {
              return (
                <div
                  key={`empty-slot-${idx}`}
                  className={`pokemon-card-row ${isSimpleMode ? "simple-mode" : ""}`}
                  style={{
                    minHeight: "180px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.6,
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
                      ❓
                    </div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Empty Pokémon Slot {idx + 1}
                    </h3>
                    <p
                      style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                    >
                      No data matched this slot. Try typing names like
                      charizard, garchomp, etc.
                    </p>
                  </div>
                </div>
              );
            }

            // Read active form state
            const activeForm = activeForms[idx] || "standard";

            // Determine Mega status
            const hasMega =
              pokemon.mega_attributes && pokemon.mega_attributes.length > 0;
            let activeMega = null;
            if (hasMega && activeForm !== "standard") {
              activeMega =
                pokemon.mega_attributes.find(
                  (m) =>
                    m.mega_category &&
                    m.mega_category.toLowerCase() === activeForm.toLowerCase(),
                ) || pokemon.mega_attributes[0]; // fallback to first mega attribute if not matched
            }

            // Active Profile details
            const displayName = activeMega
              ? `${pokemon.name} ${activeForm.toUpperCase()}`
              : pokemon.name;
            const displayIcon = activeMega ? activeMega.new_icon : pokemon.icon;
            const displayTypes = activeMega
              ? activeMega.new_types
              : pokemon.types;
            const displayEffectiveness = normalizeEffectiveness(
              activeMega ? activeMega.new_effectiveness : pokemon.effectiveness,
            );
            const activeAbility = activeMega ? activeMega.new_ability : null;

            // Stats definition and calculations
            const statsSchema = [
              { key: "hp", label: "HP", class: "color-hp-bg" },
              { key: "atk", label: "Atk", class: "color-atk-bg" },
              { key: "def", label: "Def", class: "color-def-bg" },
              { key: "spatk", label: "SpA", class: "color-spatk-bg" },
              { key: "spdef", label: "SpD", class: "color-spdef-bg" },
              { key: "speed", label: "Spe", class: "color-speed-bg" },
            ];

            return (
              <div
                key={`${pokemon.name || "poke"}-${idx}`}
                className={`pokemon-card-row ${isSimpleMode ? "simple-mode" : ""}`}
              >
                {/* Column 1: Profile & Megas */}
                <div className="profile-col">
                  <div className="poke-sprite-wrapper">
                    {displayIcon ? (
                      <img
                        src={displayIcon}
                        alt={displayName}
                        className="poke-sprite"
                      />
                    ) : (
                      <div style={{ fontSize: "2rem" }}>⭐</div>
                    )}
                  </div>
                  <div>
                    <h2 className="poke-name">{displayName}</h2>
                    <div className="poke-types">
                      {displayTypes &&
                        displayTypes.map((t) => (
                          <span
                            key={t}
                            className={`type-badge bg-${t.toLowerCase()}`}
                          >
                            {t}
                          </span>
                        ))}
                    </div>
                  </div>

                  {hasMega && (
                    <div className="mega-btn-group">
                      <button
                        className={`mega-btn ${activeForm === "standard" ? "active" : ""}`}
                        onClick={() =>
                          setActiveForms({ ...activeForms, [idx]: "standard" })
                        }
                      >
                        Base
                      </button>
                      {pokemon.mega_attributes.map((mega) => {
                        const category = mega.mega_category || "mega";
                        return (
                          <button
                            key={category}
                            className={`mega-btn ${activeForm === category ? "active" : ""}`}
                            onClick={() =>
                              setActiveForms({
                                ...activeForms,
                                [idx]: category,
                              })
                            }
                          >
                            {category}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Column 2: Stats Bars & Natures */}
                <div className="stats-col">
                  <h3 className="stat-header">Base Stats</h3>
                  {statsSchema.map((stat) => {
                    const baseVal = pokemon.base_stat
                      ? pokemon.base_stat[stat.key] || 0
                      : 0;
                    const deltaVal =
                      activeMega && activeMega.stat_increases
                        ? activeMega.stat_increases[stat.key] || 0
                        : 0;
                    const totalVal = baseVal + deltaVal;

                    // Max stats in pokemon are usually around 255. Use this for progress bar width percent.
                    const baseWidthPercent = Math.min(
                      (baseVal / 255) * 100,
                      100,
                    );
                    const deltaWidthPercent = Math.min(
                      (deltaVal / 255) * 100,
                      100,
                    );

                    return (
                      <div key={stat.key} className="stat-item">
                        <span className="stat-name">{stat.label}</span>
                        <div className="stat-val-wrapper">
                          <span className="stat-val">{totalVal}</span>
                          {deltaVal > 0 && (
                            <span className="stat-delta">+{deltaVal}</span>
                          )}
                          {deltaVal < 0 && (
                            <span
                              className="stat-delta"
                              style={{ color: "#ef4444" }}
                            >
                              {deltaVal}
                            </span>
                          )}
                        </div>
                        <div className="stat-bar-bg">
                          {/* Base Value Bar */}
                          <div
                            className={`stat-bar-fill ${stat.class}`}
                            style={{ width: `${baseWidthPercent}%` }}
                          ></div>
                          {/* Stat Increase Overlay */}
                          {deltaVal > 0 && (
                            <div
                              className="stat-bar-delta"
                              style={{
                                left: `${baseWidthPercent}%`,
                                width: `${deltaWidthPercent}%`,
                              }}
                            ></div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {/* Common Natures */}
                  {!isSimpleMode &&
                    pokemon.common_alignments &&
                    pokemon.common_alignments.length > 0 && (
                      <div>
                        <h3 className="meta-section-title">Common Natures</h3>
                        <div className="meta-list">
                          {pokemon.common_alignments.map((nature) => (
                            <div key={nature.name} className="meta-item-card">
                              <div className="meta-item-info">
                                <span className="meta-item-name">
                                  {nature.name}
                                </span>
                                <span className="meta-item-pop">
                                  {nature.popularity * 100}%
                                </span>
                              </div>
                              {nature.description && (
                                <div className="tooltip-content">
                                  <strong>{nature.name} Nature</strong>
                                  <p style={{ marginTop: "0.2rem" }}>
                                    {nature.description}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>

                {/* Column 3: Type Effectiveness */}
                <div className="effectiveness-col">
                  <h3 className="effectiveness-title">Defensive Profile</h3>
                  <div className="effectiveness-section">
                    {displayEffectiveness["4x"]?.length > 0 && (
                      <div className="eff-row double-weak">
                        <span className="eff-multiplier">4x</span>
                        <div className="eff-badges-list">
                          {displayEffectiveness["4x"].map((type) => (
                            <span
                              key={type}
                              className={`eff-badge bg-${type.toLowerCase()}`}
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {displayEffectiveness["2x"]?.length > 0 && (
                      <div className="eff-row weak">
                        <span className="eff-multiplier">2x</span>
                        <div className="eff-badges-list">
                          {displayEffectiveness["2x"].map((type) => (
                            <span
                              key={type}
                              className={`eff-badge bg-${type.toLowerCase()}`}
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {displayEffectiveness["1x"]?.length > 0 && (
                      <div className="eff-row neutral">
                        <span className="eff-multiplier">1x</span>

                        <div className="eff-badges-list">
                          {displayEffectiveness["1x"].map((type) => (
                            <span
                              key={type}
                              className={`eff-badge bg-${type.toLowerCase()}`}
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {displayEffectiveness["0.5x"]?.length > 0 && (
                      <div className="eff-row resist">
                        <span className="eff-multiplier">0.5x</span>

                        <div className="eff-badges-list">
                          {displayEffectiveness["0.5x"].map((type) => (
                            <span
                              key={type}
                              className={`eff-badge bg-${type.toLowerCase()}`}
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {displayEffectiveness["0.25x"]?.length > 0 && (
                      <div className="eff-row double-resist">
                        <span className="eff-multiplier">0.25x</span>

                        <div className="eff-badges-list">
                          {displayEffectiveness["0.25x"].map((type) => (
                            <span
                              key={type}
                              className={`eff-badge bg-${type.toLowerCase()}`}
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {displayEffectiveness["0x"]?.length > 0 && (
                      <div className="eff-row immune">
                        <span className="eff-multiplier">0x</span>

                        <div className="eff-badges-list">
                          {displayEffectiveness["0x"].map((type) => (
                            <span
                              key={type}
                              className={`eff-badge bg-${type.toLowerCase()}`}
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Column 4: Abilities & Items */}
                {!isSimpleMode && (
                  <div className="meta-col">
                    {/* Abilities */}
                    <div>
                      <h3 className="meta-section-title">Ability</h3>
                      <div className="meta-list">
                        {activeAbility ? (
                          <div className="meta-item-card">
                            <div className="meta-item-info">
                              <span className="meta-item-name">
                                {formatLabel(activeAbility.name)}
                              </span>
                              <span
                                className="meta-item-pop"
                                style={{ color: "var(--text-muted)" }}
                              >
                                Mega Ability
                              </span>
                            </div>
                            {activeAbility.description && (
                              <div className="tooltip-content">
                                <strong>
                                  {formatLabel(activeAbility.name)}
                                </strong>
                                <p style={{ marginTop: "0.2rem" }}>
                                  {activeAbility.description}
                                </p>
                              </div>
                            )}
                          </div>
                        ) : (
                          pokemon.common_abilities &&
                          pokemon.common_abilities.map((ab) => (
                            <div key={ab.name} className="meta-item-card">
                              <div className="meta-item-info">
                                <span className="meta-item-name">
                                  {formatLabel(ab.name)}
                                </span>
                                <span className="meta-item-pop">
                                  {formatPercent(ab.popularity)}
                                </span>
                              </div>
                              {ab.description && (
                                <div className="tooltip-content">
                                  <strong>{formatLabel(ab.name)}</strong>
                                  <p style={{ marginTop: "0.2rem" }}>
                                    {ab.description}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Common Items */}
                    {pokemon.common_items &&
                      pokemon.common_items.length > 0 && (
                        <div>
                          <h3 className="meta-section-title">Held Items</h3>
                          <div className="meta-list">
                            {pokemon.common_items.map((item) => (
                              <div key={item.name} className="meta-item-card">
                                {item.icon ? (
                                  <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="meta-item-icon"
                                  />
                                ) : (
                                  <span
                                    style={{
                                      marginRight: "0.5rem",
                                      fontSize: "0.8rem",
                                    }}
                                  >
                                    📦
                                  </span>
                                )}
                                <div className="meta-item-info">
                                  <span className="meta-item-name">
                                    {formatLabel(item.name)}
                                  </span>
                                  <span className="meta-item-pop">
                                    {formatPercent(item.popularity)}
                                  </span>
                                </div>
                                {item.description && (
                                  <div className="tooltip-content">
                                    <strong>{formatLabel(item.name)}</strong>
                                    <p style={{ marginTop: "0.2rem" }}>
                                      {item.description}
                                    </p>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                )}

                {/* Column 5: Moves */}
                {!isSimpleMode && (
                  <div className="moves-col">
                    <h3 className="moves-header-title">Common Moves</h3>
                    {pokemon.common_moves && pokemon.common_moves.length > 0 ? (
                      <table className="moves-table">
                        <tbody>
                          {pokemon.common_moves.map((move) => {
                            const moveCat = getMoveCategoryLabel(move.category);
                            return (
                              <tr key={move.name} className="moves-table-row">
                                <td className="move-cell-name">
                                  {formatLabel(move.name)}
                                </td>
                                <td className="move-cell-type">
                                  <span
                                    className={`eff-badge bg-${move.type.toLowerCase()}`}
                                  >
                                    {move.type}
                                  </span>
                                </td>
                                <td className="move-cell-cat">
                                  <span className={`cat-badge cat-${moveCat}`}>
                                    {moveCat}
                                  </span>
                                </td>
                                <td className="move-cell-pop">
                                  {formatPercent(move.popularity)}
                                </td>

                                {/* Detailed Move Tooltip */}
                                <td>
                                  <div className="move-tooltip">
                                    <div className="move-tooltip-title">
                                      <span>{formatLabel(move.name)}</span>
                                      <span
                                        className={`eff-badge bg-${move.type.toLowerCase()}`}
                                        style={{ fontSize: "0.65rem" }}
                                      >
                                        {move.type}
                                      </span>
                                    </div>
                                    <div className="move-tooltip-stats">
                                      <div className="move-stat-item">
                                        <span className="move-stat-lbl">
                                          Power
                                        </span>
                                        <span className="move-stat-val">
                                          {move.power !== undefined
                                            ? move.power
                                            : "-"}
                                        </span>
                                      </div>
                                      <div className="move-stat-item">
                                        <span className="move-stat-lbl">
                                          Acc
                                        </span>
                                        <span className="move-stat-val">
                                          {move.accuracy !== undefined
                                            ? `${Math.round(move.accuracy * 100)}%`
                                            : "-"}
                                        </span>
                                      </div>
                                      <div className="move-stat-item">
                                        <span className="move-stat-lbl">
                                          PP
                                        </span>
                                        <span className="move-stat-val">
                                          {move.pp !== undefined
                                            ? move.pp
                                            : "-"}
                                        </span>
                                      </div>
                                    </div>
                                    <p className="move-tooltip-desc">
                                      {move.description ||
                                        "No description available."}
                                    </p>
                                    <div className="move-tooltip-props">
                                      <span className="move-prop-badge">
                                        Priority:{" "}
                                        {move.priority !== undefined
                                          ? move.priority
                                          : "0"}
                                      </span>
                                      {move.is_contact && (
                                        <span className="move-prop-badge">
                                          Contact
                                        </span>
                                      )}
                                      {move.is_sound_based && (
                                        <span className="move-prop-badge">
                                          Sound-based
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    ) : (
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        No common moves recorded.
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </main>
    </div>
  );
}
