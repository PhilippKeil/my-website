import React, {Component} from 'react';

class News extends Component {
  render() {
    return (
      <div className="container" id="content_page">
        <div className="row">
          <h1 className="text-center hidden-xs">
            Newsreader <small>A coding project by Philipp Keil</small>
          </h1>
          <h1 className="text-center visible-xs">Newsreader</h1>
        </div>
        <div className="row">
          <div className="article panel panel-default">
            <div className="article-title panel-heading">
              <div className="row">
                <div className="col-sm-2 hidden-xs">
                  <p className="text-left">
                    Verschwörungstheoretiker
                  </p>
                </div>
                <div className="col-xs-12 col-sm-8">
                  <p className="text-center">
                    Die Welt wird heute Nacht untergehen!!!
                  </p>
                </div>
                <div className="col-sm-2 hidden-xs">
                  <p className="text-right">
                    21.12.12
                  </p>
                </div>
              </div>
            </div>
            <div className="article-description panel-body" data-news-url='https://de.wikipedia.org/wiki/Liste_von_Verschw%C3%B6rungstheorien'>
              <h2>Die Welt wird heute Nacht untergehen!!!</h2>
              <p>
                Phasellus consequat est ut mi elementum, non vehicula tellus consectetur. Cras vitae pulvinar felis. Integer molestie a odio ut venenatis. Etiam egestas est ut ex tincidunt maximus. Donec aliquet massa ac justo accumsan ultricies vel quis leo. In eu velit nec ligula tempus viverra eget non velit. Proin ut ante vel nisi pulvinar dapibus nec eget diam.
              </p>
            </div>
          </div>
          <div className="article panel panel-default">
            <div className="article-title panel-heading">
              <div className="row">
                <div className="col-sm-2 hidden-xs">
                  <p className="text-left">
                    Gott
                  </p>
                </div>
                <div className="col-xs-12 col-sm-8">
                  <p className="text-center">
                  Philipp hat Geburtstag!
                  </p>
                </div>
                <div className="col-sm-2 hidden-xs">
                  <p className="text-right">
                    12.07.16
                  </p>
                </div>
              </div>
            </div>
            <div className="article-description panel-body" data-news-url='https://www.facebook.com/philippkeil95'>
              <h2>Philipp hat Geburtstag</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus nunc vitae justo blandit convallis. Nullam a congue elit. Mauris ac augue in sapien tincidunt dignissim. In nulla velit, ornare eget lacinia eget, volutpat a leo. Integer nunc risus, imperdiet quis rhoncus vel, pulvinar a urna. Quisque nec metus in ex lacinia placerat. Vestibulum vel enim sit amet orci maximus ultricies et quis magna. Aenean viverra orci et sapien iaculis, id porta augue pulvinar. Sed at pulvinar nunc, aliquam ultrices odio. Vestibulum vel volutpat diam, in semper augue. Integer quis dui in nulla imperdiet rutrum.
              </p>
            </div>
          </div>
          <div className="article panel panel-default">
            <div className="article-title panel-heading">
              <div className="row">
                <div className="col-sm-2 hidden-xs">
                  <p className="text-left">
                    Philipp Keil
                  </p>
                </div>
                <div className="col-xs-12 col-sm-8">
                  <p className="text-center">
                    BREAKING NEWS: Kevin stinkt
                  </p>
                </div>
                <div className="col-sm-2 hidden-xs">
                  <p className="text-right">
                    08.09.16
                  </p>
                </div>
              </div>
            </div>
            <div className="article-description panel-body" data-news-url='https://emojipedia-us.s3.amazonaws.com/cache/9d/a5/9da5321e643229ffed23b52dd29c40f6.png'>
              <h2>BREAKING NEWS: Kevin stinkt</h2>
              <p>
                Duis id auctor velit, quis molestie augue. Sed sed varius urna. Integer mattis porta facilisis. Morbi vestibulum ultrices augue, a pellentesque purus tristique sed. Fusce interdum dui leo, in lacinia augue ultricies a. Nunc ut lectus dapibus, fringilla nisi id, mollis augue. Proin feugiat, elit eu pulvinar condimentum, ligula tellus venenatis quam, sit amet viverra nulla ante et nisl. Praesent posuere venenatis augue eu vulputate. Vestibulum rhoncus nibh rutrum risus pharetra sollicitudin. Praesent id tortor dui.
              </p>
            </div>
          </div>
          <div className="article panel panel-default">
            <div className="article-title panel-heading">
              <div className="row">
                <div className="col-sm-2 hidden-xs">
                  <p className="text-left">
                    Ich
                  </p>
                </div>
                <div className="col-xs-12 col-sm-8">
                  <p className="text-center">
                    Zukunftsmusik: Frohe Weihnachten
                  </p>
                </div>
                <div className="col-sm-2 hidden-xs">
                  <p className="text-right">
                    24.12.16
                  </p>
                </div>
              </div>
            </div>
            <div className="article-description panel-body" data-news-url='https://emojipedia-us.s3.amazonaws.com/cache/9e/dd/9edd3d7b40dab5878beaa2e06609d73d.png'>
              <h2>Zukunftsmusik: Frohe Weihnachten</h2>
              <p>
                Nam ut dictum tellus, ut tempus felis. Aenean posuere erat enim, eget vulputate neque tempor in. Fusce ornare aliquet placerat. Suspendisse tortor dolor, auctor in libero eu, ullamcorper sagittis dolor. Vestibulum lacinia, nisi id lobortis commodo, libero ipsum semper magna, et pellentesque sapien nunc at sapien. Donec vestibulum cursus lectus, nec placerat risus pharetra sed. Integer at tincidunt justo, a rutrum ex. Integer consequat vitae libero eu feugiat. Vivamus quis pellentesque leo, lacinia tempus urna. Nunc semper laoreet consequat. Vestibulum pretium gravida est, quis elementum arcu cursus eget.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
