import { Component, Input } from '@angular/core';
import { ButtonVariantDirective } from '../../directives/buttons/button-variant/button-variant.directive';
import { ButtonVariant } from '../../types/button-variant.type';

@Component({
  selector: 'gb-button',
  standalone: true,
  imports: [ButtonVariantDirective],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() gbButtonVariant: ButtonVariant = 'default';
}
