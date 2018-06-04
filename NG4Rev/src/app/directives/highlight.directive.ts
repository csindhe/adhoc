//This is an atttribute directive
import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective {
    @Input('appHighlight') color: string;
    @Input() defaultColor: string;
    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = "yellow";
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.color || this.defaultColor || "grey");
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight("red");
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}