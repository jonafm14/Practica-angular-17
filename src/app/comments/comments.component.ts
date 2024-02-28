import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Los comentarios de lo que sea</h3>
    <img src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-dcb93e90c4e1548ffb16978a5a8d182270c872a9.jpg" alt="this is fine meme"/>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, consectetur? Aut dolor accusantium voluptate ratione veniam, natus officia consequuntur iste reiciendis provident eum autem quod minus culpa est. Excepturi, enim.
    </p>
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }`,
})
export class CommentsComponent {

}
