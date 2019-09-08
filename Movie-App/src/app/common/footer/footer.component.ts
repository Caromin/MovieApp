import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  // if using object[] has to be an interface, otherwise will not build
  public footerLinks: any[] = [
    { title: "Home", url: "/" },
    { title: "Contacts", url: "/contacts" },
    { title: "Login", url: "/login" },
    { title: "Repo", url: "https://github.com/OaksTree1/MovieApp" }
  ];

  constructor() {}

  ngOnInit() {}
}
