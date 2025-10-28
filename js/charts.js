// =============================================
// CHARTS.JS - Interactive Charts with Chart.js
// For Richards-AquaCrop Presentation
// =============================================

// =============================================
// SOILGRIDS VALIDATION CHART
// =============================================
function createSoilGridsComparison() {
    const canvas = document.getElementById('soilgrids-comparison');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Real data from validation
    const data = {
        communes: ['Savè', 'Bembèrèkè', "N'Dali", 'Glazoué'],
        terrain: {
            argile: [6.2, 7.8, 7.5, 7.1],
            sable: [78.5, 76.2, 75.8, 77.1],
            limon: [15.3, 16.0, 16.7, 15.8]
        },
        soilgrids: {
            argile: [15.8, 17.2, 16.9, 17.5],
            sable: [63.1, 61.5, 60.2, 62.8],
            limon: [21.1, 21.3, 22.9, 19.7]
        }
    };
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.communes,
            datasets: [
                {
                    label: 'Argile - Terrain',
                    data: data.terrain.argile,
                    backgroundColor: 'rgba(239, 68, 68, 0.7)',
                    borderColor: 'rgba(239, 68, 68, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Argile - SoilGrids',
                    data: data.soilgrids.argile,
                    backgroundColor: 'rgba(239, 68, 68, 0.3)',
                    borderColor: 'rgba(239, 68, 68, 1)',
                    borderWidth: 2,
                    borderDash: [5, 5]
                },
                {
                    label: 'Sable - Terrain',
                    data: data.terrain.sable,
                    backgroundColor: 'rgba(245, 158, 11, 0.7)',
                    borderColor: 'rgba(245, 158, 11, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Sable - SoilGrids',
                    data: data.soilgrids.sable,
                    backgroundColor: 'rgba(245, 158, 11, 0.3)',
                    borderColor: 'rgba(245, 158, 11, 1)',
                    borderWidth: 2,
                    borderDash: [5, 5]
                },
                {
                    label: 'Limon - Terrain',
                    data: data.terrain.limon,
                    backgroundColor: 'rgba(16, 185, 129, 0.7)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Limon - SoilGrids',
                    data: data.soilgrids.limon,
                    backgroundColor: 'rgba(16, 185, 129, 0.3)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 2,
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Comparaison Texture des Sols : Terrain vs SoilGrids',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 12
                        },
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Fraction Texturale (%)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Communes',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                }
            },
            interaction: {
                mode: 'index',
                intersect: false
            }
        }
    });
}

// =============================================
// SCATTER PLOT: TERRAIN VS SOILGRIDS
// =============================================
function createScatterComparison() {
    const canvasId = 'scatter-comparison';
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Data points (aggregated by commune)
    const scatterData = {
        argile: [
            { x: 6.2, y: 15.8 },
            { x: 7.8, y: 17.2 },
            { x: 7.5, y: 16.9 },
            { x: 7.1, y: 17.5 }
        ],
        sable: [
            { x: 78.5, y: 63.1 },
            { x: 76.2, y: 61.5 },
            { x: 75.8, y: 60.2 },
            { x: 77.1, y: 62.8 }
        ],
        limon: [
            { x: 15.3, y: 21.1 },
            { x: 16.0, y: 21.3 },
            { x: 16.7, y: 22.9 },
            { x: 15.8, y: 19.7 }
        ]
    };
    
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Argile',
                    data: scatterData.argile,
                    backgroundColor: 'rgba(239, 68, 68, 0.6)',
                    borderColor: 'rgba(239, 68, 68, 1)',
                    borderWidth: 2,
                    pointRadius: 8,
                    pointHoverRadius: 10
                },
                {
                    label: 'Sable',
                    data: scatterData.sable,
                    backgroundColor: 'rgba(245, 158, 11, 0.6)',
                    borderColor: 'rgba(245, 158, 11, 1)',
                    borderWidth: 2,
                    pointRadius: 8,
                    pointHoverRadius: 10
                },
                {
                    label: 'Limon',
                    data: scatterData.limon,
                    backgroundColor: 'rgba(16, 185, 129, 0.6)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 2,
                    pointRadius: 8,
                    pointHoverRadius: 10
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Corrélation Terrain vs SoilGrids',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: true,
                    position: 'top'
                },
                annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            xMin: 0,
                            yMin: 0,
                            xMax: 100,
                            yMax: 100,
                            borderColor: 'rgba(107, 114, 128, 0.5)',
                            borderWidth: 2,
                            borderDash: [10, 5],
                            label: {
                                content: 'y = x (accord parfait)',
                                enabled: true,
                                position: 'end'
                            }
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Valeurs Terrain (%)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    min: 0,
                    max: 100
                },
                y: {
                    title: {
                        display: true,
                        text: 'Valeurs SoilGrids (%)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    min: 0,
                    max: 100
                }
            }
        }
    });
}

// =============================================
// METRICS COMPARISON RADAR CHART
// =============================================
function createMetricsRadar() {
    const canvasId = 'metrics-radar';
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['RMSE', 'R²', 'Corrélation', 'Biais', 'NSE'],
            datasets: [
                {
                    label: 'Argile',
                    data: [30, 0, 53, 10, 0],
                    fill: true,
                    backgroundColor: 'rgba(239, 68, 68, 0.2)',
                    borderColor: 'rgba(239, 68, 68, 1)',
                    pointBackgroundColor: 'rgba(239, 68, 68, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Sable',
                    data: [80, 0, 69, 30, 0],
                    fill: true,
                    backgroundColor: 'rgba(245, 158, 11, 0.2)',
                    borderColor: 'rgba(245, 158, 11, 1)',
                    pointBackgroundColor: 'rgba(245, 158, 11, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Limon',
                    data: [60, 0, 82, 40, 0],
                    fill: true,
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    pointBackgroundColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Performance SoilGrids par Fraction',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    }
                }
            }
        }
    });
}

// =============================================
// TIME SERIES: MOISTURE EVOLUTION
// =============================================
function createMoistureTimeSeries() {
    const canvasId = 'moisture-timeseries';
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Synthetic data for demonstration
    const hours = Array.from({ length: 25 }, (_, i) => i);
    const moistureData = hours.map(h => {
        const irrigation = h < 2 ? 0.15 : 0;
        const infiltration = Math.exp(-h / 5) * 0.1;
        const evaporation = h > 8 && h < 20 ? -0.01 : 0;
        return 0.25 + irrigation + infiltration + evaporation;
    });
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: hours,
            datasets: [
                {
                    label: 'Teneur en eau (θ)',
                    data: moistureData,
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Capacité au champ',
                    data: Array(25).fill(0.35),
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 2,
                    borderDash: [10, 5],
                    fill: false
                },
                {
                    label: 'Point de flétrissement',
                    data: Array(25).fill(0.15),
                    borderColor: 'rgba(239, 68, 68, 1)',
                    borderWidth: 2,
                    borderDash: [10, 5],
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Évolution de l\'Humidité du Sol (Simulation)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Temps (heures)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Teneur en eau (cm³/cm³)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    min: 0,
                    max: 0.5
                }
            }
        }
    });
}

// =============================================
// INITIALIZATION
// =============================================
function initializeCharts() {
    // Wait for slide to be visible
    setTimeout(() => {
        createSoilGridsComparison();
        // Add other chart initializations as needed
        // createScatterComparison();
        // createMetricsRadar();
        // createMoistureTimeSeries();
    }, 500);
}

// Make function globally accessible
window.initializeCharts = initializeCharts;
