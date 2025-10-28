"""
Script de génération des animations pour la section "Choix Techniques"
Génère:
1. Animation du bulbe d'humectation 2D (évolution temporelle)
2. Animation de comparaison Bucket Model vs Bulbe réel
"""

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from matplotlib.patches import Rectangle, Ellipse, FancyArrowPatch
from matplotlib.collections import LineCollection
import os

# Configuration globale
plt.style.use('seaborn-v0_8-whitegrid')
OUTPUT_DIR = "../assets/animations"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Palette de couleurs (cohérente avec custom.css)
COLORS = {
    'primary_blue': '#3b82f6',
    'dark_blue': '#1e3a8a',
    'success_green': '#10b981',
    'warning_orange': '#f59e0b',
    'brown': '#92400e',
    'light_blue': '#93c5fd',
    'soil_dry': '#d4a373',
    'soil_wet': '#5B9BD5',
    'danger_red': '#ef4444',
    'neutral_gray': '#6b7280'
}

# ==============================================================================
# ANIMATION 1: BULBE D'HUMECTATION 2D
# ==============================================================================

def generate_moisture_field(r, z, t, r_max=0.4, z_max=0.6, D=0.01):
    """
    Génère un champ d'humidité simulé autour d'un goutteur
    
    Paramètres:
    - r: coordonnée radiale (m)
    - z: profondeur (m)
    - t: temps (heures)
    - r_max, z_max: rayons maximaux du bulbe
    - D: coefficient de diffusion
    """
    # Centre du goutteur en surface (r=0, z=0)
    # Modèle simplifié de diffusion anisotrope (ellipsoïde)
    
    # Rayons évolutifs avec le temps
    r_t = r_max * (1 - np.exp(-0.3 * t))
    z_t = z_max * (1 - np.exp(-0.25 * t))
    
    # Distance normalisée au centre
    dist = np.sqrt((r / r_t)**2 + (z / z_t)**2)
    
    # Profil gaussien de teneur en eau
    theta_sat = 0.45  # Teneur en eau à saturation
    theta_init = 0.15  # Teneur en eau initiale
    
    theta = theta_init + (theta_sat - theta_init) * np.exp(-2 * dist**2)
    
    return theta


def create_wetting_bulb_animation(output_file="wetting_bulb_animation.mp4", 
                                   duration_hours=12, fps=10):
    """
    Crée l'animation du bulbe d'humectation
    """
    print(f"🎬 Génération de l'animation du bulbe d'humectation...")
    
    # Grille 2D axisymétrique (r, z)
    r = np.linspace(0, 0.5, 100)  # rayon jusqu'à 50 cm
    z = np.linspace(0, 0.8, 120)  # profondeur jusqu'à 80 cm
    R, Z = np.meshgrid(r, z)
    
    # Configuration de la figure
    fig, ax = plt.subplots(figsize=(10, 8))
    
    # Temps d'évolution
    times = np.linspace(0, duration_hours, duration_hours * fps)
    
    def init():
        ax.clear()
        ax.set_xlim(0, 0.5)
        ax.set_ylim(0, 0.8)
        ax.invert_yaxis()
        ax.set_xlabel('Distance radiale (m)', fontsize=14, fontweight='bold')
        ax.set_ylabel('Profondeur (m)', fontsize=14, fontweight='bold')
        ax.set_title('Évolution du bulbe d\'humectation\nautour d\'un goutteur', 
                     fontsize=16, fontweight='bold', color=COLORS['dark_blue'])
        
        # Goutteur en surface
        ax.plot(0, 0, 'o', color=COLORS['primary_blue'], markersize=15, 
                label='Goutteur', zorder=10)
        
        return []
    
    def animate(frame):
        ax.clear()
        t = times[frame]
        
        # Calcul du champ d'humidité
        theta = generate_moisture_field(R, Z, t)
        
        # Contour rempli
        levels = np.linspace(0.15, 0.45, 15)
        contourf = ax.contourf(R, Z, theta, levels=levels, cmap='Blues', alpha=0.8)
        
        # Lignes de contour
        contours = ax.contour(R, Z, theta, levels=levels[::2], colors='navy', 
                              linewidths=1.5, alpha=0.6)
        ax.clabel(contours, inline=True, fontsize=8, fmt='%0.2f')
        
        # Configuration des axes
        ax.set_xlim(0, 0.5)
        ax.set_ylim(0, 0.8)
        ax.invert_yaxis()
        ax.set_xlabel('Distance radiale (m)', fontsize=14, fontweight='bold')
        ax.set_ylabel('Profondeur (m)', fontsize=14, fontweight='bold')
        ax.set_title(f'Bulbe d\'humectation — t = {t:.1f} h', 
                     fontsize=16, fontweight='bold', color=COLORS['dark_blue'])
        
        # Goutteur
        ax.plot(0, 0, 'o', color=COLORS['warning_orange'], markersize=15, 
                label='Goutteur', zorder=10)
        
        # Légende
        ax.legend(loc='upper right', fontsize=11)
        
        # Zone racinaire indicative (rectangle semi-transparent)
        root_zone = Rectangle((0, 0.1), 0.4, 0.4, 
                               fill=False, edgecolor=COLORS['success_green'], 
                               linewidth=2.5, linestyle='--', label='Zone racinaire')
        ax.add_patch(root_zone)
        
        return [contourf]
    
    # Animation
    anim = animation.FuncAnimation(fig, animate, init_func=init, 
                                    frames=len(times), interval=1000//fps, 
                                    blit=False, repeat=True)
    
    # Sauvegarde en GIF (ne nécessite pas FFmpeg)
    output_path = os.path.join(OUTPUT_DIR, output_file.replace('.mp4', '.gif'))
    anim.save(output_path, writer='pillow', fps=fps)
    
    plt.close(fig)
    print(f"✅ Animation sauvegardée : {output_path}")


# ==============================================================================
# ANIMATION 2: BUCKET MODEL vs BULBE RÉEL (Style image jointe)
# ==============================================================================

def create_bucket_vs_bulb_comparison(output_file="bucket_vs_bulb_comparison.mp4", 
                                      fps=20, duration_sec=8):
    """
    Animation comparant le modèle bucket (couches homogènes) 
    et le bulbe d'humectation (gradient radial)
    Style inspiré de l'image fournie par l'utilisateur
    """
    print(f"🎬 Génération de l'animation Bucket vs Bulbe...")
    
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 7))
    
    # Nombre de frames
    n_frames = duration_sec * fps
    
    # Définition des couches de sol
    soil_layers = [
        {'name': 'Couche 1', 'depth': (0.0, 0.2), 'color': '#C8B8D8'},
        {'name': 'Couche 2', 'depth': (0.2, 0.4), 'color': '#B8A8C8'},
        {'name': 'Couche 3', 'depth': (0.4, 0.6), 'color': '#A898B8'},
        {'name': 'Couche 4', 'depth': (0.6, 0.8), 'color': '#9888A8'}
    ]
    
    def init():
        for ax in [ax1, ax2]:
            ax.clear()
            ax.set_xlim(-0.5, 0.5)
            ax.set_ylim(-0.85, 0.15)
            ax.set_aspect('equal')
        
        fig.suptitle('Comparaison des modèles d\'infiltration', 
                     fontsize=18, fontweight='bold', color=COLORS['dark_blue'], y=0.98)
        
        return []
    
    def animate(frame):
        for ax in [ax1, ax2]:
            ax.clear()
            ax.set_xlim(-0.5, 0.5)
            ax.set_ylim(-0.85, 0.15)
            ax.set_aspect('equal')
        
        # Progression de l'animation (0 → 1)
        progress = min(frame / (n_frames * 0.8), 1.0)  # Atteint 1.0 à 80% de l'animation
        
        # ===== AXE 1: MODÈLE BUCKET (Couches homogènes) =====
        ax1.set_title('(A) Modèle « bucket » — couches homogènes\nPas de temps typique : journalier', 
                      fontsize=12, fontweight='bold', color=COLORS['dark_blue'], pad=10)
        
        # Dessiner les couches de sol
        for layer in soil_layers:
            y_top = -layer['depth'][0]
            y_bottom = -layer['depth'][1]
            height = y_top - y_bottom
            
            # Couche de base
            layer_rect = Rectangle((-0.4, y_bottom), 0.8, height, 
                                   facecolor=layer['color'], 
                                   edgecolor='#4a4a4a', linewidth=1.5, alpha=0.7)
            ax1.add_patch(layer_rect)
            
            # Étiquette de couche (à gauche)
            ax1.text(-0.45, (y_top + y_bottom) / 2, layer['name'], 
                    ha='right', va='center', fontsize=9, fontweight='bold')
        
        # Irrigation uniforme descendante (flèches rouges)
        arrow_positions = [-0.25, 0, 0.25]
        infiltration_depth = 0.8 * progress  # Descend progressivement
        
        for x_pos in arrow_positions:
            # Flèche depuis la surface
            if progress > 0.1:
                arrow_y = min(-infiltration_depth + 0.05, -0.05)
                ax1.annotate('', xy=(x_pos, arrow_y), 
                            xytext=(x_pos, 0.05),
                            arrowprops=dict(arrowstyle='->', color='#C41E3A', 
                                          lw=3, alpha=0.8))
        
        # Zones humides avec saturation décroissante vers le bas
        for i, layer in enumerate(soil_layers):
            y_top = -layer['depth'][0]
            y_bottom = -layer['depth'][1]
            layer_mid = (layer['depth'][0] + layer['depth'][1]) / 2
            
            if infiltration_depth > layer['depth'][0]:
                # Cette couche est atteinte par l'infiltration
                penetration = min((infiltration_depth - layer['depth'][0]) / 
                                (layer['depth'][1] - layer['depth'][0]), 1.0)
                
                # Saturation décroissante : couches supérieures plus saturées
                # Alpha diminue avec la profondeur (couche 1: 0.6, couche 4: 0.25)
                saturation_alpha = 0.65 - (i * 0.12)
                
                wet_height = (y_top - y_bottom) * penetration
                wet_rect = Rectangle((-0.4, y_top - wet_height), 0.8, wet_height,
                                    facecolor=COLORS['primary_blue'], 
                                    alpha=saturation_alpha, edgecolor='none')
                ax1.add_patch(wet_rect)
        
        # Titre "Irrigation / pluie (uniforme)"
        ax1.text(0, 0.08, 'Irrigation / pluie (uniforme)', ha='center', 
                fontsize=10, fontweight='bold', color=COLORS['dark_blue'])
        
        # Cadre autour du profil
        ax1.add_patch(Rectangle((-0.4, -0.8), 0.8, 0.8, 
                                fill=False, edgecolor='black', linewidth=2))
        
        ax1.axis('off')
        
        # ===== AXE 2: IRRIGATION LOCALISÉE (Bulbe d'humectation) =====
        ax2.set_title('(B) Irrigation localisée — bulbe d\'humectation\nPas de temps requis : horaire / sub-horaire', 
                      fontsize=12, fontweight='bold', color=COLORS['dark_blue'], pad=10)
        
        # Fond de sol sec (rectangle)
        soil_background = Rectangle((-0.4, -0.8), 0.8, 0.8,
                                   facecolor='#E8E0F0', 
                                   edgecolor='black', linewidth=2, alpha=0.5)
        ax2.add_patch(soil_background)
        
        # Bulbe d'humectation ellipsoïdal avec gradient radial
        if progress > 0.05:
            # Paramètres du bulbe évolutifs (forme ellipsoïdale : plus profond que large)
            bulb_r_max = 0.35 * progress  # Rayon horizontal (réduit)
            bulb_z_max = 0.45 * progress   # Profondeur (augmentée pour forme ellipsoïdale)
            
            # Centre du bulbe JUSTE SOUS LE GOUTTEUR (commence en surface)
            bulb_center_x = 0
            bulb_center_z = 0.05  # Commence juste sous la surface, pas au milieu
            
            # Créer un gradient radial avec plusieurs ellipses concentriques
            n_contours = 10
            for i in range(n_contours, 0, -1):
                scale = i / n_contours
                # Alpha plus fort au centre, décroît vers l'extérieur
                alpha = 0.7 * (1 - scale * 0.6)
                
                # Ellipse avec ratio hauteur/largeur ~ 2.2 (plus allongée verticalement)
                ellipse = Ellipse((bulb_center_x, bulb_center_z - bulb_z_max/2), 
                                 bulb_r_max * 2 * scale,      # Largeur
                                 bulb_z_max * 2 * scale,      # Hauteur (> largeur)
                                 facecolor=COLORS['primary_blue'], 
                                 alpha=alpha, 
                                 edgecolor='none', zorder=2)
                ax2.add_patch(ellipse)
            
            # # Contour extérieur du bulbe ellipsoïdal (ligne bleue foncée)
            # if progress > 0.3:
            #     bulb_outline = Ellipse((bulb_center_x, bulb_center_z - bulb_z_max/2), 
            #                           bulb_r_max * 2,    # Largeur
            #                           bulb_z_max * 1.5,    # Hauteur
            #                           fill=False, 
            #                           edgecolor=COLORS['dark_blue'], 
            #                           linewidth=2.5, zorder=3)
            #     ax2.add_patch(bulb_outline)
        
        # Goutteur / émetteur en surface (icône orange)
        goutteur_y = 0.05
        ax2.plot(0, goutteur_y, marker='v', color=COLORS['warning_orange'], 
                markersize=18, markeredgecolor='#8B4513', markeredgewidth=2, zorder=10)
        
        # Flèches radiales sortant du goutteur (comme dans l'image)
        if progress > 0.2:
            arrow_angles = np.linspace(0, 2*np.pi, 8, endpoint=False)
            arrow_length = 0.08
            for angle in arrow_angles:
                dx = arrow_length * np.cos(angle)
                dy = arrow_length * np.sin(angle)
                ax2.annotate('', xy=(dx, goutteur_y + dy), 
                           xytext=(0, goutteur_y),
                           arrowprops=dict(arrowstyle='->', color='#C41E3A', 
                                         lw=2, alpha=0.7), zorder=5)
        
        # Étiquette "Goutteur / émetteur"
        ax2.text(0, 0.12, 'Goutteur / émetteur', ha='center', 
                fontsize=10, fontweight='bold', color=COLORS['dark_blue'])
        
        # Annotation "Gradient d'humidité radial" (pointant vers le bulbe depuis le goutteur)
        if progress > 0.5:
            ax2.annotate('Gradient d\'humidité radial', 
                        xy=(0.18, -0.15), xytext=(0.35, -0.05),
                        fontsize=9, style='italic', color=COLORS['dark_blue'],
                        arrowprops=dict(arrowstyle='->', color=COLORS['dark_blue'], 
                                      lw=1.5, connectionstyle='arc3,rad=0.2'))
        
        ax2.axis('off')
        
        return []
    
    # Animation
    anim = animation.FuncAnimation(fig, animate, init_func=init, 
                                    frames=n_frames, interval=1000//fps, 
                                    blit=False, repeat=True)
    
    # Sauvegarde en GIF
    output_path = os.path.join(OUTPUT_DIR, output_file.replace('.mp4', '.gif'))
    print(f"   💾 Sauvegarde en cours (cela peut prendre quelques instants)...")
    anim.save(output_path, writer='pillow', fps=fps)
    
    plt.close(fig)
    print(f"✅ Animation sauvegardée : {output_path}")


# ==============================================================================
# GÉNÉRATION D'UNE IMAGE STATIQUE DU BULBE (pour thumbnail)
# ==============================================================================

def create_bulb_static_image(output_file="wetting_bulb_static.png"):
    """
    Génère une image statique du bulbe à t=8h pour utilisation en thumbnail
    """
    print(f"🖼️ Génération de l'image statique du bulbe...")
    
    r = np.linspace(0, 0.5, 100)
    z = np.linspace(0, 0.8, 120)
    R, Z = np.meshgrid(r, z)
    
    theta = generate_moisture_field(R, Z, t=8)
    
    fig, ax = plt.subplots(figsize=(10, 8))
    
    levels = np.linspace(0.15, 0.45, 15)
    contourf = ax.contourf(R, Z, theta, levels=levels, cmap='Blues', alpha=0.8)
    contours = ax.contour(R, Z, theta, levels=levels[::2], colors='navy', 
                          linewidths=1.5, alpha=0.6)
    ax.clabel(contours, inline=True, fontsize=10, fmt='%0.2f')
    
    ax.set_xlim(0, 0.5)
    ax.set_ylim(0, 0.8)
    ax.invert_yaxis()
    ax.set_xlabel('Distance radiale (m)', fontsize=14, fontweight='bold')
    ax.set_ylabel('Profondeur (m)', fontsize=14, fontweight='bold')
    ax.set_title('Bulbe d\'humectation (t = 8 h)', 
                 fontsize=16, fontweight='bold', color=COLORS['dark_blue'])
    
    ax.plot(0, 0, 'o', color=COLORS['warning_orange'], markersize=15, label='Goutteur')
    
    root_zone = Rectangle((0, 0.1), 0.4, 0.4, fill=False, 
                           edgecolor=COLORS['success_green'], 
                           linewidth=2.5, linestyle='--', label='Zone racinaire')
    ax.add_patch(root_zone)
    
    ax.legend(loc='upper right', fontsize=12)
    
    plt.colorbar(contourf, ax=ax, label='Teneur en eau θ (m³/m³)')
    
    output_path = os.path.join(OUTPUT_DIR, output_file)
    plt.savefig(output_path, dpi=150, bbox_inches='tight')
    plt.close(fig)
    
    print(f"✅ Image statique sauvegardée : {output_path}")


# ==============================================================================
# SCRIPT PRINCIPAL
# ==============================================================================

if __name__ == "__main__":
    print("\n" + "="*70)
    print("🎨 GÉNÉRATION DES ANIMATIONS - CHOIX TECHNIQUES")
    print("="*70 + "\n")
    
    print("ℹ️ Génération en format GIF (ne nécessite pas FFmpeg)\n")
    
    # Génération des animations
    try:
        # 1. Animation du bulbe
        create_wetting_bulb_animation(
            output_file="wetting_bulb_animation.mp4",  # sera converti en .gif
            duration_hours=12,
            fps=10
        )
        
        # 2. Animation bucket vs bulbe
        create_bucket_vs_bulb_comparison(
            output_file="bucket_vs_bulb_comparison.mp4",  # sera converti en .gif
            fps=10,
            duration_sec=6
        )
        
        # 3. Image statique
        create_bulb_static_image(output_file="wetting_bulb_static.png")
        
        print("\n" + "="*70)
        print("✅ TOUTES LES ANIMATIONS ONT ÉTÉ GÉNÉRÉES AVEC SUCCÈS")
        print("="*70)
        print(f"\n📁 Fichiers créés dans : {OUTPUT_DIR}/")
        print("   - wetting_bulb_animation.gif")
        print("   - bucket_vs_bulb_comparison.gif")
        print("   - wetting_bulb_static.png")
        
    except Exception as e:
        print(f"\n❌ ERREUR lors de la génération : {e}")
        import traceback
        traceback.print_exc()
