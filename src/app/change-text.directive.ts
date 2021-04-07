import { Directive, ElementRef, Renderer2, AfterViewInit } from "@angular/core";

@Directive({
  selector: "[appChangeText]"
})
export class ChangeTextDirective implements AfterViewInit {
  constructor(private el: ElementRef, private _renderer: Renderer2) {}

  ngAfterViewInit() {
    const messageDom = this._renderer.selectRootElement("#message");

    this._renderer.listen(this.el.nativeElement, "input", () => {
      messageDom.innerHTML = "";
      const value = this.el.nativeElement.value;

      if (value === "CS") {
        messageDom.innerHTML =
          '<h2> <i class="fa fa-heart text-danger fa-3x"></i> Hello </h2>';
        return false;
      }

      if (!value.length) {
        return false;
      }

      if (value.length >= 3) {
        messageDom.innerHTML =
          '<i class="fa fa-times-circle text-danger p-1" aria-hidden="true"></i> maximum characters length is 3';
        return false;
      }
      messageDom.innerHTML =
        '<i class="fa fa-check-circle text-success p-1" aria-hidden="true"></i> good';
    });
  }
}
