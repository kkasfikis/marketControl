import { NgModule } from "@angular/core";
import { ResponsiveCustomTableDirective } from "./responsive-custom-table.directive";

@NgModule({
  declarations: [ResponsiveCustomTableDirective],
  exports: [ResponsiveCustomTableDirective]
})
export class ResponsiveCustomTableModule {}