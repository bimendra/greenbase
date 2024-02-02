import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { ButtonVariant } from '../../../types/button-variant.type';

@Directive({
  selector: '[gbButtonVariant]',
  standalone: true,
})
export class ButtonVariantDirective implements OnInit {
  @Input() gbButtonVariant: ButtonVariant = 'default';
  private classPrefix = 'gb-button';

  constructor(private buttonRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.gbButtonVariant !== 'default') {
      this.renderer.addClass(
        this.buttonRef.nativeElement,
        `${this.classPrefix}-${this.gbButtonVariant}`
      );
    }
  }
}
