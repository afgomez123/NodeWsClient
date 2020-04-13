import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  courses: any = [
    { id: 1, name: "curso 1" },
    { id: 6, name: "curso 2" },
    { id: 3, name: "curso 3" }
  ];

  ngOnInit() {}

  onAdd() {
    this.courses.push({ id: 4, name: "nombre" });
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
    // console.log(this.courses.splice(index, 1));
  }

  log(user) {
    console.log(user);
  }
}
