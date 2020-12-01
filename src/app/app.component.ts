import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title : string = "angularDirectoryProjectBS5" ;
  jsonURL : string = "" ;
  people : object ;
  searchString : string = "";

  _personDepartment : string = "" ;
  _personEmailAddress : string = "" ;
  _personName : string = "" ;
  _personNarrative : string = "" ;
  _personPhotoFileName : string = "" ;
  _personPosition : string = "" ;
  
  constructor( private http: HttpClient ) {
    this.jsonURL = "assets/directory.json" ;
  }

  bindBio(personInformation){
    this._personDepartment = personInformation.department ;
    this._personEmailAddress = personInformation.email ;
    this._personName = personInformation.name ;
    this._personNarrative = personInformation.bio ;
    this._personPhotoFileName = personInformation.photoFileName ;
    this._personPosition = personInformation.position ;
  }

  ngOnInit(): void {
    this.http.get<Object>( this.jsonURL ).subscribe(
      data => { 
        function sortByKey(array, key) {
          return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
          });
        }

       this.people = sortByKey(data,"sortName") ;
      }
    );
  }
}
