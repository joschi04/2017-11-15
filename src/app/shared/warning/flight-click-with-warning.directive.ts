import {
  Directive, Output, EventEmitter, Input, HostListener, ElementRef, Renderer, OnInit,
  HostBinding
} from '@angular/core';

@Directive({
    selector: '[clickWithWarning]'
})
export class ClickWithWarningDirective {

    @Input() warning: string = 'Are you sure?';
    @Output() clickWithWarning = new EventEmitter();

    constructor(private elementRef: ElementRef, private renderer: Renderer) {
    }

    /*
    ngOnInit() {
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'class', 'btn btn-danger');
    }
    */

    @HostBinding('class')
    cssClass = 'btn btn-danger';

    @HostListener('click', ['$event'])
    handleClick($event): void {
        console.log('handleClick', $event);
        if (confirm(this.warning)) {
            this.clickWithWarning.emit();
        }
    }
}
