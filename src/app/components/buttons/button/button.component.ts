import { NgClass, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

type ColorVariant = 'white' | 'primary' | 'secondary' | 'destructive';
type SizeVariant = 'medium' | 'small' | 'large';

@Component({
  selector: 'button[gb-button]',
  standalone: true,
  imports: [NgClass, NgIf, NgIconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  host: {
    class: 'rounded border flex gap-1 font-medium',
  },
})
export class ButtonComponent {
  private colorClassArray!: string[];
  private sizeClassArray!: string[];
  @Input() variant: ColorVariant = 'white';
  @Input() size: SizeVariant = 'medium';
  @Input() icon: string = '';
  @Input() iconPosition: 'start' | 'end' = 'start';
  @ViewChild('buttonText') buttonText?: any;

  showIconStart: boolean = false;
  showIconEnd: boolean = false;
  showInnerText: boolean = true;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {}

  @HostBinding('class') get hostClasses(): string {
    return `${this.colorClassArray.join(' ')} ${this.sizeClassArray.join(' ')}`;
  }
  @HostBinding('class.px-[23px]') hostPaddingClass = false;

  colorVariants: {
    [key in ColorVariant]: string[];
  } = {
    primary: [
      `
      text-white bg-skin-primary border-skin-border-primary
      hover:bg-skin-primary-hover hover:border-skin-primary-hover
      active:bg-skin-primary-active active:border-skin-primary-active
      focus:ring focus:skin-primary-focus
      disabled:bg-skin-disabled disabled:border-skin-disabled
      `,
    ],
    secondary: [
      `
      text-primary bg-skin-secondary border-skin-secondary
      hover:bg-skin-secondary-hover hover:border-skin-secondary-hover
      active:bg-skin-secondary-active active:border-skin-secondary-active
      focus:ring focus:ring-skin-border
      disabled:text-white disabled:bg-skin-disabled disabled:border-skin-disabled
      `,
    ],
    white: [
      `
      text-primary bg-transparent border-border-default
      hover:bg-skin-default-hover hover:border-skin-default-hover
      active:bg-skin-default-active 
      focus:ring focus:ring-skin-border
      disabled:text-white disabled:bg-skin-disabled disabled:border-skin-disabled
      `,
    ],
    destructive: [
      `
      text-white bg-skin-destructive border-skin-border-destructive
      hover:bg-skin-destructive-hover hover:border-skin-destructive-hover
      active:bg-skin-destructive-active active:border-skin-destructive-active
      focus:ring focus:ring-skin-destructive-focus
      disabled:text-white disabled:bg-skin-disabled disabled:border-skin-disabled
      `,
    ],
  };

  sizeVariants: {
    [key in SizeVariant]: string[];
  } = {
    small: ['p-[7px]'],
    medium: ['p-[7px]'],
    large: ['p-[11px]'],
  };

  ngOnChanges() {
    this.colorClassArray = this.colorVariants[this.variant];
    this.sizeClassArray = this.sizeVariants[this.size];
    if (this.iconPosition === 'start') {
      this.showIconStart = true;
    }
    if (this.iconPosition === 'end') {
      this.showIconEnd = true;
    }
  }

  ngAfterViewInit() {
    const isTextButton: boolean = Boolean(
      this.buttonText.nativeElement.textContent
    );
    let sizeClasses = [...this.sizeVariants[this.size]];
    if (isTextButton) {
      switch (this.size) {
        case 'small':
          sizeClasses.push('px-[19px]');
          this.sizeVariants[this.size].push('pt-3');
          break;
        case 'large':
          sizeClasses.push('px-[23px]');
          break;
        default: // default size, i.e. medium
          sizeClasses.push('px-[23px]');
      }
    } else {
      this.showInnerText = false;
    }
    sizeClasses.forEach((sizeClass) => {
      this.renderer.addClass(this.elRef.nativeElement, sizeClass);
    });
    this.cd.detectChanges();
  }
}
