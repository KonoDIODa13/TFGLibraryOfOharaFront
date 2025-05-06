import { Component, OnInit } from '@angular/core';
import { Libro } from '../../../shared/model/Libro';
import { ActivatedRoute } from '@angular/router';
import { LibraryOfOharaService } from '../../../shared/service/library-of-ohara.service';

@Component({
  selector: 'book-detail',
  templateUrl: './bookDetail.component.html',
  styleUrl: './bookDetail.component.css',
  standalone: false
})
export class BookDetailComponent implements OnInit {

  libro?: Libro;

  constructor(
    private route: ActivatedRoute,
    private service: LibraryOfOharaService
  ) { }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.service.getLibroByID(id).subscribe(libro => {
        this.libro = libro
        console.log(this.libro)
      })
    }
  }
}
