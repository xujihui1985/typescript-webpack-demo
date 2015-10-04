import {default as $} from 'jquery';
import {default as moment} from 'moment';
import * as Handlebars from 'handlebars';
import Hello, {IHello, HelloViewModal} from './hello';

function getViewModal(): HelloViewModal {
  return {
    name: 'hello name getViewModal function',
    listOfEntities: [
      {desc: 'entity desc', type: 'bbbbbb'},
      {desc: 'entity desc2', type: 'ccccccc'}
    ]
  };
}

$(()=>{
  
  let h:IHello = new Hello(1,2);
  const $main = $('.main');
  
  // $main.html(h.render({
  //   name: 'hello name property',
  //   listOfEntities: [
  //     {desc: 'entity desc', type: 'bbbbbb'},
  //     {desc: 'entity desc2', type: 'ccccccc'}
  //   ]
  // }));
  
  $main.html(h.render(getViewModal));
  
  // setInterval(()=>{
    
  //  // $main.html(h.getNow());
  //   $main.html();
  // }, 1000);
});

