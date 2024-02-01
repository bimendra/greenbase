import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root',
})
export class IconRegistryService {
  // Assuming you have a way to dynamically load icon names into this array
  public icons: string[];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.icons = [
      'arrow-down',
      'arrow-left',
      'arrow-right',
      'arrow-up',
      'badge',
      'bag',
      'bar-chart-outline',
      'bell-outline',
      'bin',
      'bookmark-outline',
      'bookmark',
      'briefcase-outline',
      'calendar-check',
      'calendar-outline',
      'calendar-plus',
      'calendar',
      'camera-classic',
      'camera',
      'cancel',
      'cart',
      'chat-message-outline',
      'check-circle',
      'check',
      'chevron-down',
      'chevron-left',
      'chevron-right',
      'chevron-up',
      'clipboard-portrait',
      'clock',
      'cloud-outline',
      'cog',
      'comment-add',
      'copy',
      'dashboard-outline',
      'desktop',
      'document-outline',
      'document-plus-outline',
      'dollar',
      'download',
      'edit',
      'ellipsis',
      'envelope-open-outline',
      'envelope-outlne',
      'euro',
      'eye-crossed-outline',
      'eye-outline',
      'flag-outline',
      'flag',
      'floppy-disk-outline',
      'folder-outline',
      'folder-plus-outline',
      'heart-outline',
      'heart',
      'home',
      'info',
      'laptop',
      'list',
      'location-outline',
      'lock-open-outline',
      'lock-outline',
      'lorry-outline',
      'megaphone-outline',
      'menu',
      'minus-circle',
      'minus',
      'navigation-marker-outline',
      'paper-clip',
      'pause-outline',
      'pause',
      'picture',
      'play-outline',
      'play',
      'plus-circle',
      'plus',
      'question-mark-circle',
      'refresh',
      'search',
      'settings',
      'sheield-check',
      'skip-back-outline',
      'skip-back',
      'skip-forth-outline',
      'skip-forth',
      'star-outline',
      'star',
      'stop-watch',
      'tablet-landscape',
      'tablet-narrow-lanscape',
      'tablet-narrow-portrait',
      'tablet-portrait',
      'tag',
      'target',
      'upload',
      'user-multiple',
      'user',
      'video-camera',
      'warn',
      'windo-outline',
      'world-outline',
      'x-circle',
      'x',
    ];
    this.registerIcons(this.icons);
  }

  public registerIcons(icons: string[]): void {
    icons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons/${icon}.svg`
        )
      );
    });
  }
}
