import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "sort",
})
export class SortPipe implements PipeTransform {
	transform(value: any, arg: any): any {
		value.sort(function (a: any, b: any) {
			if (a.id > b.id) {
				return 1;
			}
			if (a.id < b.id) {
				return -1;
			}
			// a must be equal to b
			return 0;
		});

		return value;
	}
}
