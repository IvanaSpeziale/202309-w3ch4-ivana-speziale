import { Component } from './component';
import '../style.css';
import { Series } from '../model/serie';

export class ListPendingSeries extends Component {
  listSeries: Series[];
  constructor(selector: string, listSeries: Series[]) {
    super(selector);
    this.listSeries = listSeries;
    this.template = this.createTemplate();
    this.render();
  }

  getSerie(data: Series[]) {
    const pendingSerie = data.filter((data: Series) => data.score === 0);

    let listPendingSerieHTML = '';
    for (const data of pendingSerie) {
      listPendingSerieHTML += `
    <li class="serie">
      <img class="serie__poster"
        src="${data.poster}"
        alt="${data.name} poster" />
      <h4 class="serie__title">${data.name}</h4>
      <p class="serie__info">${data.creator} (${data.year})</p>
      <ul class="score">
        <li class="score__star">
          <i class="icon--score fas fa-star" title="1/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="2/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="3/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="4/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="5/5"></i>
        </li>
      </ul>
      <i class="fas fa-times-circle icon--delete"></i>
    </li>
    `;
    }

    return listPendingSerieHTML;
  }

  createTemplate() {
    return `
    <ul class="series-list">
    ${this.getSerie(this.listSeries)}
    </ul>
    `;
  }
}
