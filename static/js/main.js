
// English language Header Part

class MyHeaderLanguage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <div class="language">
            <div class="dropdown">
              <button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                Language
              </button>
              <div class="dropdown-menu mega-dropdown-menu">
                <a class="dropdown-item" id="active_part" href="http://japanguideinfo.com/">ENGLISH</a>
                <a class="dropdown-item" href="http://japanguideinfo.com/jp/">日本語</a>
                <a class="dropdown-item" href="http://japanguideinfo.com/kr/">한국어</a>
                <a class="dropdown-item" href="http://japanguideinfo.com/cn/">中文 (简体)</a>
                <a class="dropdown-item" href="http://japanguideinfo.com/tw/">中文 (繁體)</a>
              </div>
            </div>
          </div>
    `
  }
}
customElements.define('my-header-language', MyHeaderLanguage)


class MyHeaderLinkNew extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <div class="menu_top" id="en_menu">
            <nav class="navbar navbar-expand-lg p-0">

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <i class="bi bi-list"></i>
              </button>
            
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                  
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/trend/">Japanese Trend </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/event/">Festivals/Events</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/shock/">Culture shock</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/interest/">Find your interest</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/recommend/">Recommend Tours</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/travelersuggestion/">Suggested by Travelers</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/food/">Food Culture</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/city/">City Introduction</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/howtotravel/">How To Travel</a>
                  </li>


                  <div class="menu_border" id="new_eng"></div>

                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/">HOME </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/web/">About Korea Travel Guide Info</a> 
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://www.youtube.com/channel/UC0u7mVIpRdNehBanANORptA" target="blank">YouTube Introduction</a> 
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/JTGI/">SNS video streaming</a> 
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/advertisement/">Advertisement&Price list</a> 
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/request/">Request for shooting/editing/advertising</a> 
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/inquiry/">Contact us</a> 
                    <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/aboutus/">Company Profile</a>
                  </li>
                  </li>
                </ul>
                
              </div>
            </nav>
          </div>
    `
  }
}
customElements.define('my-header-link-new', MyHeaderLinkNew)

// End English language Header Part


// English language Footer Part
class EnFooterNew extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer_menu">
            <div class="item">
              <div class="title">
                <h6>Japan Travel  Guide information</h6>
               </div>
              <div class="link">
                  <a href="http://japanguideinfo.com/trend/">Japanese Trend</a>
                  <a href="http://japanguideinfo.com/event/">Japanese Special Festivals and Events !</a>
                  <a href="http://japanguideinfo.com/shock/">Culture shock !</a>
                  <a href="http://japanguideinfo.com/interest/">Find your interest</a>
                  <a href="http://japanguideinfo.com/howtotravel/">How to Travel</a>
                  <a href="http://japanguideinfo.com/recommend/">Recommend Tours</a>
                  <a href="http://japanguideinfo.com/travelersuggestion/">Japan Tours Suggested by Travelers</a>
                  <a href="http://japanguideinfo.com/food/">Japanese Food Culture</a>
                  <a href="http://japanguideinfo.com/commonsense/">Japanese Common Sense</a>
                  <a href="http://japanguideinfo.com/map/">City map</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6> <a href="http://japanguideinfo.com/city/">City Introduction</a></h6>
              </div>
              <div class="link">
                <p>
                  <a href="http://japanguideinfo.com/city/Hokkaido/" >Hokkaido/</a>
                  <a href="http://japanguideinfo.com/city/Aomori/" >Aomori/</a>
                  <a href="http://japanguideinfo.com/city/Akita/" >Akita</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/city/sendai/" >Miyagi・Sendai/</a>
                  <a href="http://japanguideinfo.com/city/Chiba/" >Chiba</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/city/Tokyo/" >Tokyo/</a>
                  <a href="http://japanguideinfo.com/city/Yokohama/" >Kanagawa・Yokohama</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/city/Niigata/" >Niigata/</a>
                  <a href="http://japanguideinfo.com/city/Nagano/" >Nagano</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/city/Gifu/" >Gifu/</a>
                  <a href="http://japanguideinfo.com/city/Aichi/" >Aichi・Nagoya</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/city/Kyoto/" >Kyoto/</a>
                  <a href="http://japanguideinfo.com/city/Nara/" >Nara</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/city/Osaka/" >Osaka/</a>
                  <a href="http://japanguideinfo.com/city/Kobe/" >Hyogo・Kobe</a>
                </p>
                <p> 
                <a href="http://japanguideinfo.com/city/Okayama/" >Okayama・</a>
                <a href="http://japanguideinfo.com/city/Hiroshima/" >Hiroshima</a>
                </p>
                <a href="http://japanguideinfo.com/city/Shikoku/" >Shikoku(Tokusima/Kagawa /Ehime /Kochi)</a>
          
                <a href="http://japanguideinfo.com/city/Fukuoka/" >Kyushu(Fukuoka/Nagasaki /Kumamoto) </a>
                <a href="http://japanguideinfo.com/city/Okinawa/" >Okinawa</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6>Major Sightseeing Spots</h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/spots/sightseeing/" >Sightseeing</a>
                <a href="http://japanguideinfo.com/spots/shopping/" >Shopping</a>
                <a href="http://japanguideinfo.com/spots/japanesegarden/" >Japanese Garden</a>
                <a href="http://japanguideinfo.com/spots/publicbaths/" >Public Baths</a>
                <a href="http://japanguideinfo.com/spots/cherryblossomspots/" >Cherry Blossom Spots</a>
                <a href="http://japanguideinfo.com/spots/beaches/" >Beaches</a>
                <a href="http://japanguideinfo.com/spots/hotspring/" >Hot spring</a>
                <a href="http://japanguideinfo.com/spots/winterliiuminations/" >Winter Liiuminations</a>
                <a href="http://japanguideinfo.com/spots/snow/" >Snow</a>
                <a href="http://japanguideinfo.com/spots/instagrammablespot/" >Instagrammable spot</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/howtotravel/">How to Travel</a></h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/howtotravel/BeforeDeparture/" >Before Your Departure to Japan</a>
                <a href="http://japanguideinfo.com/howtotravel/whilewaitingforflight/" >When You Arrive at the Airport in Your Country</a>
                <a href="http://japanguideinfo.com/howtotravel/uponarrival/" >Upon Your Arrival in Japan</a>
                <a href="http://japanguideinfo.com/howtotravel/commonsense/" >Japanese Common Sense</a>
                <a href="http://japanguideinfo.com/howtotravel/train/" >How to Get on a Train</a>
                <a href="http://japanguideinfo.com/howtotravel/japanrailpass/" >Japan Rail Pass</a>
                <a href="http://japanguideinfo.com/howtotravel/bus/" >How to Get on a Bus</a>
                <a href="http://japanguideinfo.com/howtotravel/rentacar/" >How to Rent a Car</a>
                <a href="http://japanguideinfo.com/howtotravel/onsen/" >How to Take an Onsen</a>
                <a href="http://japanguideinfo.com/howtotravel/whenyougetlost/" >When You Get Lost</a>
                <a href="http://japanguideinfo.com/howtotravel/basicjapanese/" >Basic Japanese Words for Travelers</a>
              </div>
            </div>

            
           
            <div class="item last_item">
             
                <div class="bottom_item">
                  <div class="title">
                    <h6>About us</h6>
                   </div>
                   <div class="link">
                    <a href="http://japanguideinfo.com/" >Home</a>
                    <a href="http://japanguideinfo.com/web/" >About Korea Travel Guide Info</a> 
                    <a href="http://japanguideinfo.com/aboutus/" >Company Profile</a> 
                    <a href="http://japanguideinfo.com/advertisement/" ><b>Advertisement & Price list</b></a>
                    <a href="https://www.youtube.com/channel/UC0u7mVIpRdNehBanANORptA" target="blank" >YouTube Introduction</a>                  
                    <a href="http://japanguideinfo.com/JTGI/" target="blank" >SNS video streaming</a>                            
                    <a href="http://japanguideinfo.com/termofservice/" >Term of service</a>                  
                    <a href="http://japanguideinfo.com/externalwriter/" >Request to an external writer</a> 
                    <a href="http://japanguideinfo.com/request/" >Request for shooting/editing/advertising</a>  
                    <a href="http://japanguideinfo.com/inquiry/" >Contact us</a>          
                  </div>
                </div>

                <div class="other_ln">
                  <ul>
                    <li><a href="http://japanguideinfo.com/es">1</a></li>
                    <li><a href="http://japanguideinfo.com/fr">2</a></li>
                    <li><a href="http://japanguideinfo.com/id">3</a></li>
                    <li><a href="http://japanguideinfo.com/pt">4</a></li>
                    <li><a href="http://japanguideinfo.com/my">5</a></li>
                    <li><a href="http://japanguideinfo.com/sa">6</a></li>
                    <li><a href="http://japanguideinfo.com/ta">7</a></li>
                    <li><a href="http://japanguideinfo.com/vn">8</a></li>
                  </ul>
                </div>
                
         
                
            </div>
           
           
          </div>
    `
  }
}
customElements.define('en-footer-new', EnFooterNew)
// End English language Footer Part



//************************************ Japanese ****************************** */

// Japanese language Header Part

class JpHeaderLanguage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="language">
    <div class="dropdown">
      <button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">
        Language
      </button>
      <div class="dropdown-menu mega-dropdown-menu">
        <a class="dropdown-item" href="http://japanguideinfo.com/">ENGLISH</a>
        <a class="dropdown-item" id="active_part" href="http://japanguideinfo.com/jp/">日本語</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/kr/">한국어</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/cn/">中文 (简体)</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/tw/">中文 (繁體)</a>
      </div>
    </div>
  </div>
    `
  }
}
customElements.define('jp-header-language', JpHeaderLanguage)


class JpHeaderLinkNew extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <div class="menu_top" id="en_menu">
            <nav class="navbar navbar-expand-lg p-0">

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <i class="bi bi-list"></i>
              </button>
            
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/trend/">日本のトレンド </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/event/">お祭り・イベント！ </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/shock/">カルチャーショック! </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/interest/">体験型日本文化・ツアー </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/recommend/">おすすめツアー </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/travelersuggestion/">旅行者のおすすめの旅！</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/food/">日本の食文化</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/city/">主な都市・町の紹介</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/howtotravel/">賢い日本旅行のコツ</a>
                  </li>


                  <div class="menu_border" id="new_eng"></div>
                  
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/">HOME </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/web/"> Korea Travel Guide Info について </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://www.youtube.com/channel/UClxHaP75Z2H6KmheJ1xp8Fg" target="blank">YouTubeチャンネル紹介 </a> 
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/JTGI/">SNS動画配信 </a> 
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/advertisement/">広告＆料金表</a> 
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/request/">撮影・編集・広告のご依頼 </a> 
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/inquiry/">お問合せ</a> 
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://japanguideinfo.com/jp/aboutus/">会社概要 </a>
                  </li>
                </ul>
                
              </div>
            </nav>
          </div>
    `
  }
}
customElements.define('jp-header-link-new', JpHeaderLinkNew)

// End Japanese language Header Part


// Japanese language Footer Part

class JpFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer_menu">
            <div class="item">
              <div class="title">
                <h6>Japan Travel  Guide info</h6>
               </div>
              <div class="link">
                  <a href="http://japanguideinfo.com/jp/trend/">日本のトレンド</a>
                  <a href="http://japanguideinfo.com/jp/event/">日本のお祭りやイベント！</a>
                  <a href="http://japanguideinfo.com/jp/shock/">カルチャーショック!</a>
                  <a href="http://japanguideinfo.com/jp/interest/">日本の文化体験、体験型ツアー</a>
                  <a href="http://japanguideinfo.com/jp/howtotravel/">賢い日本旅行のコツ</a>
                  <a href="http://japanguideinfo.com/jp/recommend/">おすすめツアー</a>
                  <a href="http://japanguideinfo.com/jp/travelersuggestion/">旅行者のおすすめの旅！</a>
                  <a href="http://japanguideinfo.com/jp/food/">日本の食文化</a>
                  <a href="http://japanguideinfo.com/jp/commonsense/">日本のローカルルール</a>
                  <a href="http://japanguideinfo.com/jp/map/">City map</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/jp/city/">主な都市・町の紹介</a></h6>
              </div>
              <div class="link">
                <p>
                  <a href="http://japanguideinfo.com/jp/city/Hokkaido/" >北海道 / </a>
                  <a href="http://japanguideinfo.com/jp/city/Aomori/" >青森 / </a>
                  <a href="http://japanguideinfo.com/jp/city/Akita/" >秋田</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/jp/city/sendai/" >宮城 ・仙台 / </a>
                  <a href="http://japanguideinfo.com/jp/city/Chiba/" >千葉</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/jp/city/Tokyo/" >東京 / </a>
                  <a href="http://japanguideinfo.com/jp/city/Yokohama/" >神奈川・横浜</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/jp/city/Niigata/" >新潟 / </a>
                  <a href="http://japanguideinfo.com/jp/city/Nagano/" >長野</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/jp/city/Gifu/" >岐阜 / </a>
                  <a href="http://japanguideinfo.com/jp/city/Aichi/" >愛知・名古屋</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/jp/city/Kyoto/" >京都 / </a>
                  <a href="http://japanguideinfo.com/jp/city/Nara/" >奈良</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/jp/city/Osaka/" >大阪 / </a>
                  <a href="http://japanguideinfo.com/jp/city/Kobe/" >兵庫・神戸</a>
                </p>
                <p> <a href="http://japanguideinfo.com/jp/city/Okayama/" >岡山/</a>
                    <a href="http://japanguideinfo.com/jp/city/Hiroshima/" >広島</a>
                </p>
                <a href="http://japanguideinfo.com/jp/city/Shikoku/" >四国（徳島 / 香川 / 愛媛 / 高知）</a>
          
                <a href="http://japanguideinfo.com/jp/city/Fukuoka/" >九州（福岡 / 長崎 / 熊本） </a>
                <a href="http://japanguideinfo.com/jp/city/Okinawa/" >沖縄</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6>主な観光スポット</h6>
              </div>
              <div class="link">
              <a href="http://japanguideinfo.com/jp/spots/sightseeing/" >観光スポット</a>
              <a href="http://japanguideinfo.com/jp/spots/shopping/" >ショッピング</a>
              <a href="http://japanguideinfo.com/jp/spots/japanesegarden/" >日本庭園・ミュージアム</a>
              <a href="http://japanguideinfo.com/jp/spots/publicbaths/" >公主銭湯</a>
              <a href="http://japanguideinfo.com/jp/spots/cherryblossomspots/" >お花見スポット</a>
              <a href="http://japanguideinfo.com/jp/spots/beaches/" >近くの海水浴場</a>
              <a href="http://japanguideinfo.com/jp/spots/hotspring/" >近くの温泉</a>
              <a href="http://japanguideinfo.com/jp/spots/winterliiuminations/" >近くのイルミネーション</a>
              <a href="http://japanguideinfo.com/jp/spots/snow/" >近場の雪</a>
              <a href="http://japanguideinfo.com/jp/spots/instagrammablespot/" >映えスポット</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/jp/howtotravel/">賢い日本旅行のコツ</a></h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/jp/howtotravel/BeforeDeparture/" >来日前の準備</a>
                <a href="http://japanguideinfo.com/jp/howtotravel/whilewaitingforflight/" >空港に着いたら</a>
                <a href="http://japanguideinfo.com/jp/howtotravel/uponarrival/" >日本に着いたら</a>
                <a href="http://japanguideinfo.com/jp/howtotravel/commonsense/" >日本のローカルルール</a>
                <a href="http://japanguideinfo.com/jp/howtotravel/train/" >電車の乗り方</a>
                <a href="http://japanguideinfo.com/jp/howtotravel/japanrailpass/" >JRパス</a>
                <a href="http://japanguideinfo.com/jp/howtotravel/bus/" >バスの乗り方</a>
                <a href="http://japanguideinfo.com/jp/howtotravel/rentacar/" >レンタカーの借り方</a>
                <a href="http://japanguideinfo.com/jp/howtotravel/onsen/" >温泉の入り方</a>
                <a href="http://japanguideinfo.com/jp/howtotravel/whenyougetlost/" >目的地までの行き方が分からない</a>
                <a href="http://japanguideinfo.com/jp/howtotravel/basicjapanese/" >旅行で使える日本語表現</a>
              </div>
            </div>

            
           
            <div class="item last_item">
             
                <div class="bottom_item">
                  <div class="title">
                    <h6>私たちに関しては</h6>
                   </div>
                   <div class="link">
                    <a href="http://japanguideinfo.com/jp/" >Home</a>
                    <a href="http://japanguideinfo.com/jp/web/" >Korea Travel Guide Infoについて</a>
                    <a href="http://japanguideinfo.com/jp/aboutus/" >会社概要</a> 
                    <a href="http://japanguideinfo.com/jp/advertisement/" ><b>広告＆料金表</b></a>
                    <a href="https://www.youtube.com/channel/UClxHaP75Z2H6KmheJ1xp8Fg" target="blank">YouTubeチャンネル紹介</a> 
                    <a href="http://japanguideinfo.com/jp/JTGI/" >SNS動画配信</a>
                    <a href="http://japanguideinfo.com/jp/termofservice/" >利用規約</a>                  
                    <a href="http://japanguideinfo.com/jp/externalwriter/" >ライター募集</a> 
                    <a href="http://japanguideinfo.com/jp/request/" >撮影・編集・広告のご依頼</a>  
                    <a href="http://japanguideinfo.com/jp/inquiry/" >お問合せ</a>   
                  </div>
                </div>
                
         
                
            </div>
           
           
          </div>
    `
  }
}
customElements.define('jp-footer', JpFooter)

// End Japanese language Footer Part


//*********************************** Korean *********************************** */

// Korean language Header Part

class KrHeaderLanguage extends HTMLElement {
  connectedCallback() {
  //   this.innerHTML = `
  //   <div class="language">
  //   <div class="dropdown">
  //     <button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">
  //       Language
  //     </button>
  //     <div class="dropdown-menu mega-dropdown-menu">
  //       <a class="dropdown-item" href="http://japanguideinfo.com/">ENGLISH</a>
  //       <a class="dropdown-item" href="http://japanguideinfo.com/jp/">日本語</a>
  //       <a class="dropdown-item" id="active_part" href="http://japanguideinfo.com/kr/">한국어</a>
  //       <a class="dropdown-item" href="http://japanguideinfo.com/cn/">中文 (简体)</a>
  //       <a class="dropdown-item" href="http://japanguideinfo.com/tw/">中文 (繁體)</a>
  //     </div>
  //   </div>
  // </div>
  //   `
  }
}
customElements.define('kr-header-language', KrHeaderLanguage)


class KrHeaderLink extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <div class="menu_top">
 <nav class="navbar navbar-expand-lg p-0">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <!-- <span class="navbar-toggler-icon"></span> -->
  <i class="bi bi-list"></i>
</button>
    
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
 <ul class="navbar-nav mx-auto">
  <li class="nav-item">
 <a class="nav-link" href="http://koreaguideinfo.com/">HOME </a>
 </li>
 <li class="nav-item">
 <a class="nav-link" href="http://koreaguideinfo.com/trend/">일본의 유행</a>
</li>
<li class="nav-item">
<a class="nav-link" href="http://koreaguideinfo.com/event/">일본 전통 축제와 이벤트 !</a>
 </li>
 <li class="nav-item">
 <a class="nav-link" href="http://koreaguideinfo.com/shock/">컬쳐쇼크!</a>
  </li>
 <li class="nav-item">
 <a class="nav-link" href="http://koreaguideinfo.com/interest/">체험형일본문화・투어</a>
  </li>
 <li class="nav-item">
 <a class="nav-link" href="http://koreaguideinfo.com/howtotravel/">일본을 여행하는법</a>
</li>
<div class="menu_border"></div>
<li class="nav-item">
 <a class="nav-link" href="http://koreaguideinfo.com/recommend/">추천 투어</a>
</li>
         
 <li class="nav-item">
  <a class="nav-link" href="http://koreaguideinfo.com/travelersuggestion/">여행자가 제안하는 일본여행</a>
</li>
  <li class="nav-item">
 <a class="nav-link" href="http://koreaguideinfo.com/food/">일본 식문화</a>
</li>
 <li class="nav-item">
<a class="nav-link" href="http://koreaguideinfo.com/city/">주요 도시 소개</a>
</li>
<li class="nav-item">
<a class="nav-link" href="http://koreaguideinfo.com/commonsense/">기초상식</a>
</li>
<li class="nav-item">
 <a class="nav-link" href="http://koreaguideinfo.com/map/">도시맵</a>
 </li>
 </ul>
   </div>
   </nav>
</div>
   `
  }
}
customElements.define('kr-header-link', KrHeaderLink)


// End Korean language Header Part



// Korean language Footer Part

class KrFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer_menu">
            <div class="item">
              <div class="title">
                <h6>Korea Travel Guide info</h6>
               </div>
              <div class="link">
                  <a href="http://koreaguideinfo.com/trend/">일본의 유행</a>
                  <a href="http://koreaguideinfo.com/event/">일본 전통 축제와 이벤트 !</a>
                  <a href="http://koreaguideinfo.com/shock/">컬쳐쇼크!</a>
                  <a href="http://koreaguideinfo.com/interest/">체험형일본문화・투어</a>
                  <a href="http://koreaguideinfo.com/howtotravel/">일본을 여행하는법</a>
                  <a href="http://koreaguideinfo.com/recommend/">추천하는 투어</a>
                  <a href="http://koreaguideinfo.com/travelersuggestion/">여행자가 제안하는 일본여행</a>
                  <a href="http://koreaguideinfo.com/food/">일본 식문화</a>
                  <a href="http://koreaguideinfo.com/commonsense/">일본의 기초상식</a>
                  <a href="http://koreaguideinfo.com/map/">도시맵</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://koreaguideinfo.com/city/">주요 도시 소개</a></h6>
              </div>
              <div class="link">
                <p>
                  <a href="http://koreaguideinfo.com/city/Hokkaido/" >홋카이도 / </a>
                  <a href="http://koreaguideinfo.com/city/Aomori/" >아오모리 / </a>
                  <a href="http://koreaguideinfo.com/city/Akita/" >아키타</a>
                </p>
                <p>
                  <a href="http://koreaguideinfo.com/city/sendai/" >미야기・센다이 / </a>
                  <a href="http://koreaguideinfo.com/city/Chiba/" >치바</a>
                </p>
                <p>
                  <a href="http://koreaguideinfo.com/city/Tokyo/" >도쿄 / </a>
                  <a href="http://koreaguideinfo.com/city/Yokohama/" >카나가와・요코하마</a>
                </p>
                <p>
                  <a href="http://koreaguideinfo.com/city/Niigata/" >니가타 / </a>
                  <a href="http://koreaguideinfo.com/city/Nagano/" >나가노</a>
                </p>
                <p>
                  <a href="http://koreaguideinfo.com/city/Gifu/" >기후 / </a>
                  <a href="http://koreaguideinfo.com/city/Aichi/" >아이치・나고야</a>
                </p>
                <p>
                  <a href="http://koreaguideinfo.com/city/Kyoto/" >교토 / </a>
                  <a href="http://koreaguideinfo.com/city/Nara/" >나라</a>
                </p>
                <p>
                  <a href="http://koreaguideinfo.com/city/Osaka/" >오사카 / </a>
                  <a href="http://koreaguideinfo.com/city/Kobe/" >효고・코베</a>
                </p>
                <p> <a href="http://koreaguideinfo.com/city/Okayama/" >오카야마 / </a>
                    <a href="http://koreaguideinfo.com/city/Hiroshima/" >히로시마</a>
                </p>
                <a href="http://koreaguideinfo.com/city/Shikoku/" >시코쿠（토쿠시마 / 카가와 / 에히메 / 고치）</a>
          
                <a href="http://koreaguideinfo.com/city/Fukuoka/" >큐슈（후쿠오카 / 나가사키 / 쿠마모토） </a>
                <a href="http://koreaguideinfo.com/city/Okinawa/" >오키나와</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6>주요관광지</h6>
              </div>
              <div class="link">
              <a href="http://koreaguideinfo.com/spots/sightseeing/" >관광지</a>
              <a href="http://koreaguideinfo.com/spots/shopping/" >쇼핑</a>
              <a href="http://koreaguideinfo.com/spots/japanesegarden/" >일본정원・박물관</a>
              <a href="http://koreaguideinfo.com/spots/publicbaths/" >공중목욕탕</a>
              <a href="http://koreaguideinfo.com/spots/cherryblossomspots/" >벚꽃명소</a>
              <a href="http://koreaguideinfo.com/spots/beaches/" >해변</a>
              <a href="http://koreaguideinfo.com/spots/hotspring/" >온천</a>
              <a href="http://koreaguideinfo.com/spots/winterliiuminations/" >겨울 일루미네이션</a>
              <a href="http://koreaguideinfo.com/spots/snow/" >눈내리는 명소</a>
              <a href="http://koreaguideinfo.com/spots/instagrammablespot/" >인스타그램 명소</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6> <a href="http://koreaguideinfo.com/howtotravel/">일본을 여행하는법</a></h6>
              </div>
              <div class="link">
                <a href="http://koreaguideinfo.com/howtotravel/BeforeDeparture/" >일본에 출발하기전 준비</a>
                <a href="http://koreaguideinfo.com/howtotravel/whilewaitingforflight/" >공항에 도착했을 때</a>
                <a href="http://koreaguideinfo.com/howtotravel/uponarrival/" >일본에 도착하면</a>
                <a href="http://koreaguideinfo.com/howtotravel/commonsense/" >일본의 기초상식</a>
                <a href="http://koreaguideinfo.com/howtotravel/train/" >전철 타는법</a>
                <a href="http://koreaguideinfo.com/howtotravel/japanrailpass/" >JR패스 이용법</a>
                <a href="http://koreaguideinfo.com/howtotravel/bus/" >버스 이용법</a>
                <a href="http://koreaguideinfo.com/howtotravel/rentacar/" >렌터카 이용법</a>
                <a href="http://koreaguideinfo.com/howtotravel/onsen/" >온천 이용법</a>
                <a href="http://koreaguideinfo.com/howtotravel/whenyougetlost/" >길을 잃었을 때</a>
                <a href="http://koreaguideinfo.com/howtotravel/basicjapanese/" >기초 일본어</a>
              </div>
            </div>

            
           
            <div class="item last_item">
             
                <div class="bottom_item">
                  <div class="title">
                    <h6>About us</h6>
                   </div>
                   <div class="link">
                    <a href="http://japanguideinfo.com/kr/" >Home</a>
                    <a href="http://japanguideinfo.com/web/" >About Korea Travel Guide Info</a> 
                    <a href="http://japanguideinfo.com/aboutus/" >Company Profile</a> 
                    <a href="http://japanguideinfo.com/advertisement/" ><b>Advertisement & Price list</b></a>
                    <a href="http://japanguideinfo.com/jp/advertisement/" ><b>広告＆料金表</b></a>
                    <a href="https://www.youtube.com/channel/UC0u7mVIpRdNehBanANORptA" target="blank" >YouTube Introduction</a>                  
                    <a href="http://japanguideinfo.com/JTGI/" target="blank" >SNS video streaming</a>                            
                    <a href="http://japanguideinfo.com/termofservice/" >Term of service</a>                  
                    <a href="http://japanguideinfo.com/externalwriter/" >Request to an external writer</a> 
                    <a href="http://japanguideinfo.com/request/" >Request for shooting/editing/advertising</a>  
                    <a href="http://japanguideinfo.com/inquiry/" >Contact us</a>          
                  </div>
                </div>
                
         
                
            </div>
           
           
          </div>
    `
  }
}
customElements.define('kr-footer', KrFooter)

// End Korean language Footer Part


//************************************* China ************************************ */


// China language Header Part

class CnHeaderLanguage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="language">
    <div class="dropdown">
      <button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">
        Language
      </button>
      <div class="dropdown-menu mega-dropdown-menu">
        <a class="dropdown-item"  href="http://japanguideinfo.com/">ENGLISH</a>
        <a class="dropdown-item"  href="http://japanguideinfo.com/jp/">日本語</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/kr/">한국어</a>
        <a class="dropdown-item" id="active_part" href="http://japanguideinfo.com/cn/">中文 (简体)</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/tw/">中文 (繁體)</a>
      </div>
    </div>
  </div>
    `
  }
}
customElements.define('cn-header-language', CnHeaderLanguage)


class CnHeaderLink extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="menu_top">
    <nav class="navbar navbar-expand-lg p-0">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="bi bi-list"></i>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/cn/">HOME </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/cn/trend/">日本流行</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/cn/event/">祭典与活动！</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/cn/shock/">文化差异!</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/cn/interest/">体验型日本文化旅行</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/cn/howtotravel/">如何去日本旅行</a>
          </li>
          <div class="menu_border"></div>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/cn/recommend/">必玩路线</a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/cn/travelersuggestion/">游客推荐旅游路线</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/cn/food/">日本食文化</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/cn/city/">主要城市介绍</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/cn/commonsense/">日本常识</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/cn/map/">城市地图</a>
          </li>
         
        </ul>
        
      </div>
    </nav>
  </div>
    `
  }
}
customElements.define('cn-header-link', CnHeaderLink)

// End China language Header Part

// China language Footer Part

class CnFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer_menu">
            <div class="item">
              <div class="title">
                <h6>Japan Travel  Guide information</h6>
               </div>
              <div class="link">
                  <a href="http://japanguideinfo.com/cn/trend/">日本流行</a>
                  <a href="http://japanguideinfo.com/cn/event/">日本祭典及特别活动！</a>
                  <a href="http://japanguideinfo.com/cn/shock/">文化差异</a>
                  <a href="http://japanguideinfo.com/cn/interest/">体验型日本文化旅行</a>
                  <a href="http://japanguideinfo.com/cn/howtotravel/">如何去日本旅行</a>
                  <a href="http://japanguideinfo.com/cn/recommend/">必玩路线</a>
                  <a href="http://japanguideinfo.com/cn/travelersuggestion/">游客推荐旅游路线</a>
                  <a href="http://japanguideinfo.com/cn/food/">日本食文化</a>
                  <a href="http://japanguideinfo.com/cn/commonsense/">日本常识</a>
                  <a href="http://japanguideinfo.com/cn/map/">城市地图</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/cn/city/">主要城市介绍</a></h6>
              </div>
              <div class="link">
                <p>
                  <a href="http://japanguideinfo.com/cn/city/Hokkaido/" >北海道 /</a>
                  <a href="http://japanguideinfo.com/cn/city/Aomori/" >青森/</a>
                  <a href="http://japanguideinfo.com/cn/city/Akita/" >秋田</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/cn/city/sendai/" >宫城・仙台/</a>
                  <a href="http://japanguideinfo.com/cn/city/Chiba/" >千叶</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/cn/city/Tokyo/" >东京/</a> 
                  <a href="http://japanguideinfo.com/cn/city/Yokohama/" >神奈川・横滨</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/cn/city/Niigata/" >新泻/</a> 
                  <a href="http://japanguideinfo.com/cn/city/Nagano/" >长野</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/cn/city/Gifu/" >岐阜/</a> 
                  <a href="http://japanguideinfo.com/cn/city/Aichi/" >爱知・名古屋</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/cn/city/Kyoto/" >京都 /</a>
                  <a href="http://japanguideinfo.com/cn/city/Nara/" >奈良</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/cn/city/Osaka/" >大阪/</a>
                  <a href="http://japanguideinfo.com/cn/city/Kobe/" >兵库・神户</a>
                </p>
                <p> 
                <a href="http://japanguideinfo.com/cn/city/Okayama/" >冈山・</a>
                <a href="http://japanguideinfo.com/cn/city/Hiroshima/" >广岛</a>
                </p>
                <a href="http://japanguideinfo.com/cn/city/Shikoku/" >四国（德岛 / 香川 / 爱媛 / 高知）</a>
          
                <a href="http://japanguideinfo.com/cn/city/Fukuoka/" >九州（福岡 / 長崎 / 熊本）</a>
                <a href="http://japanguideinfo.com/cn/city/Okinawa/" >冲绳</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6>主要观光胜地</h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/cn/spots/sightseeing/" >观光景点</a>
                <a href="http://japanguideinfo.com/cn/spots/shopping/" >购物</a>
                <a href="http://japanguideinfo.com/cn/spots/japanesegarden/" >日本庭园与博物馆</a>
                <a href="http://japanguideinfo.com/cn/spots/publicbaths/" >大众浴场</a>
                <a href="http://japanguideinfo.com/cn/spots/cherryblossomspots/" >赏花胜地</a>
                <a href="http://japanguideinfo.com/cn/spots/beaches/" >附近的海水浴场</a>
                <a href="http://japanguideinfo.com/cn/spots/hotspring/" >附近的温泉</a>
                <a href="http://japanguideinfo.com/cn/spots/winterliiuminations/" >附近的霓虹灯景点</a>
                <a href="http://japanguideinfo.com/cn/spots/snow/" >附近的雪景</a>
                <a href="http://japanguideinfo.com/cn/spots/instagrammablespot/" >网红景点</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/cn/howtotravel/">如何去日本旅行</a></h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/cn/howtotravel/BeforeDeparture/" >出发去日本前</a>
                <a href="http://japanguideinfo.com/cn/howtotravel/whilewaitingforflight/" >到达所在国机场时</a>
                <a href="http://japanguideinfo.com/cn/howtotravel/uponarrival/" >到达日本</a>
                <a href="http://japanguideinfo.com/cn/howtotravel/commonsense/" >日本常识</a>
                <a href="http://japanguideinfo.com/cn/howtotravel/train/" >电车乘坐方法</a>
                <a href="http://japanguideinfo.com/cn/howtotravel/japanrailpass/" >日本JR铁路通票</a>
                <a href="http://japanguideinfo.com/cn/howtotravel/bus/" >巴士乘坐方法</a>
                <a href="http://japanguideinfo.com/cn/howtotravel/rentacar/" >租车方法</a>
                <a href="http://japanguideinfo.com/cn/howtotravel/onsen/" >如何泡温泉</a>
                <a href="http://japanguideinfo.com/cn/howtotravel/whenyougetlost/" >当你迷路时</a>
                <a href="http://japanguideinfo.com/cn/howtotravel/basicjapanese/" >游客必备日语</a>
              </div>
            </div>

            <div class="item last_item">
             
                <div class="bottom_item">
                  <div class="title">
                    <h6>About us</h6>
                   </div>
                   <div class="link">
                    <a href="http://japanguideinfo.com/cn/" >Home</a>
                    <a href="http://japanguideinfo.com/web/" >About Korea Travel Guide Info</a> 
                    <a href="http://japanguideinfo.com/aboutus/" >Company Profile</a> 
                    <a href="http://japanguideinfo.com/advertisement/" ><b>Advertisement & Price list</b></a>
                    <a href="http://japanguideinfo.com/jp/advertisement/" ><b>広告＆料金表</b></a>
                    <a href="https://www.youtube.com/channel/UC0u7mVIpRdNehBanANORptA" target="blank" >YouTube Introduction</a>                  
                    <a href="http://japanguideinfo.com/JTGI/" target="blank" >SNS video streaming</a>                            
                    <a href="http://japanguideinfo.com/termofservice/" >Term of service</a>                  
                    <a href="http://japanguideinfo.com/externalwriter/" >Request to an external writer</a> 
                    <a href="http://japanguideinfo.com/request/" >Request for shooting/editing/advertising</a>  
                    <a href="http://japanguideinfo.com/inquiry/" >Contact us</a>          
                  </div>
                </div>
            </div>
          </div>
    `
  }
}
customElements.define('cn-footer', CnFooter)

// End China language Footer Part


//************************************* Taiwan **************************************** */

// Taiwan language Header Part

class TwHeaderLanguage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="language">
    <div class="dropdown">
      <button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">
        Language
      </button>
      <div class="dropdown-menu mega-dropdown-menu">
        <a class="dropdown-item"  href="http://japanguideinfo.com/">ENGLISH</a>
        <a class="dropdown-item"  href="http://japanguideinfo.com/jp/">日本語</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/kr/">한국어</a>
        <a class="dropdown-item"  href="http://japanguideinfo.com/cn/">中文 (简体)</a>
        <a class="dropdown-item" id="active_part" href="http://japanguideinfo.com/tw/">中文 (繁體)</a>
      </div>
    </div>
  </div>
    `
  }
}
customElements.define('tw-header-language', TwHeaderLanguage)


class TwHeaderLink extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="menu_top">
    <nav class="navbar navbar-expand-lg p-0">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="bi bi-list"></i>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/tw/">HOME </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/tw/trend/">日本流行</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/tw/event/">祭典與活動！ </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/tw/shock/">文化差異！</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/tw/interest/">體驗型日本文化旅行 </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/tw/howtotravel/">如何去日本旅行</a>
          </li>
          <div class="menu_border"></div>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/tw/recommend/">必玩路線 </a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/tw/travelersuggestion/">遊客推薦旅遊路線 </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/tw/food/">日本食文化 </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/tw/city/">主要城市介紹 </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/tw/commonsense/">日本常識 </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/tw/map/">城市地圖</a>
          </li>
         
        </ul>
        
      </div>
    </nav>
  </div>
    `
  }
}
customElements.define('tw-header-link', TwHeaderLink)

// End Taiwan language Header Part

// Taiwan language Footer Part

class TwFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer_menu">
            <div class="item">
              <div class="title">
                <h6>Japan Travel  Guide information</h6>
               </div>
              <div class="link">
                  <a href="http://japanguideinfo.com/tw/trend/">日本流行</a>
                  <a href="http://japanguideinfo.com/tw/event/">日本祭典及特別活動！</a>
                  <a href="http://japanguideinfo.com/tw/shock/">文化差異</a>
                  <a href="http://japanguideinfo.com/tw/interest/">體驗型日本文化旅行</a>
                  <a href="http://japanguideinfo.com/tw/howtotravel/">如何去日本旅行</a>
                  <a href="http://japanguideinfo.com/tw/recommend/">必玩路線</a>
                  <a href="http://japanguideinfo.com/tw/travelersuggestion/">遊客推薦旅遊路線</a>
                  <a href="http://japanguideinfo.com/tw/food/">日本食文化</a>
                  <a href="http://japanguideinfo.com/tw/commonsense/">日本常識</a>
                  <a href="http://japanguideinfo.com/tw/map/">城市地圖</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/tw/city/">主要城市介紹 </a></h6>
              </div>
              <div class="link">
                <p>
                  <a href="http://japanguideinfo.com/tw/city/Hokkaido/" >北海道 /</a>
                  <a href="http://japanguideinfo.com/tw/city/Aomori/" >青森/</a>
                  <a href="http://japanguideinfo.com/tw/city/Akita/" >秋田</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/tw/city/sendai/" >宮城・仙台/</a>
                  <a href="http://japanguideinfo.com/tw/city/Chiba/" >千葉</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/tw/city/Tokyo/" >東京/</a> 
                  <a href="http://japanguideinfo.com/tw/city/Yokohama/" >神奈川・橫濱</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/tw/city/Niigata/" >新瀉/</a> 
                  <a href="http://japanguideinfo.com/tw/city/Nagano/" >長野</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/tw/city/Gifu/" >岐阜/</a> 
                  <a href="http://japanguideinfo.com/tw/city/Aichi/" >愛知・名古屋</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/tw/city/Kyoto/" >京都 /</a>
                  <a href="http://japanguideinfo.com/tw/city/Nara/" >奈良</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/tw/city/Osaka/" >大阪/</a>
                  <a href="http://japanguideinfo.com/tw/city/Kobe/" >兵庫・神戶</a>
                </p>
                <p> 
                <a href="http://japanguideinfo.com/tw/city/Okayama/" >岡山・</a>
                <a href="http://japanguideinfo.com/tw/city/Hiroshima/" >廣島</a>
                </p>
                <a href="http://japanguideinfo.com/tw/city/Shikoku/" >四國（德島 / 香川 / 愛媛 / 高知）</a>
          
                <a href="http://japanguideinfo.com/tw/city/Fukuoka/" >九州（福岡 / 長崎 / 熊本）</a>
                <a href="http://japanguideinfo.com/tw/city/Okinawa/" >沖繩</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6>主要觀光勝地</h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/tw/spots/sightseeing/" >觀光景點</a>
                <a href="http://japanguideinfo.com/tw/spots/shopping/" >購物</a>
                <a href="http://japanguideinfo.com/tw/spots/japanesegarden/" >日本庭園與博物館</a>
                <a href="http://japanguideinfo.com/tw/spots/publicbaths/" >大眾浴場</a>
                <a href="http://japanguideinfo.com/tw/spots/cherryblossomspots/" >賞花勝地</a>
                <a href="http://japanguideinfo.com/tw/spots/beaches/" >附近的海水浴場</a>
                <a href="http://japanguideinfo.com/tw/spots/hotspring/" >附近的溫泉</a>
                <a href="http://japanguideinfo.com/tw/spots/winterliiuminations/" >附近的霓虹燈景點</a>
                <a href="http://japanguideinfo.com/tw/spots/snow/" >附近的雪景</a>
                <a href="http://japanguideinfo.com/tw/spots/instagrammablespot/" >網紅景點</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/tw/howtotravel/">如何去旅行</a></h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/tw/howtotravel/BeforeDeparture/" >出發去日本前</a>
                <a href="http://japanguideinfo.com/tw/howtotravel/whilewaitingforflight/" >到達所在國機場時</a>
                <a href="http://japanguideinfo.com/tw/howtotravel/uponarrival/" >到達日本</a>
                <a href="http://japanguideinfo.com/tw/howtotravel/commonsense/" >日本常識</a>
                <a href="http://japanguideinfo.com/tw/howtotravel/train/" >電車乘坐方法</a>
                <a href="http://japanguideinfo.com/tw/howtotravel/japanrailpass/" >日本JR鐵路通票</a>
                <a href="http://japanguideinfo.com/tw/howtotravel/bus/" >巴士乘坐方法</a>
                <a href="http://japanguideinfo.com/tw/howtotravel/rentacar/" >租車方法</a>
                <a href="http://japanguideinfo.com/tw/howtotravel/onsen/" >如何泡溫泉</a>
                <a href="http://japanguideinfo.com/tw/howtotravel/whenyougetlost/" >當你迷路時</a>
                <a href="http://japanguideinfo.com/tw/howtotravel/basicjapanese/" >遊客必備日語</a>
              </div>
            </div>

            <div class="item last_item">
             
                <div class="bottom_item">
                  <div class="title">
                    <h6>About us</h6>
                   </div>
                   <div class="link">
                    <a href="http://japanguideinfo.com/tw/" >Home</a>
                    <a href="http://japanguideinfo.com/web/" >About Korea Travel Guide Info</a> 
                    <a href="http://japanguideinfo.com/aboutus/" >Company Profile</a> 
                    <a href="http://japanguideinfo.com/advertisement/" ><b>Advertisement & Price list</b></a>
                    <a href="http://japanguideinfo.com/jp/advertisement/" ><b>広告＆料金表</b></a>
                    <a href="https://www.youtube.com/channel/UC0u7mVIpRdNehBanANORptA" target="blank" >YouTube Introduction</a>                  
                    <a href="http://japanguideinfo.com/JTGI/" target="blank" >SNS video streaming</a>                            
                    <a href="http://japanguideinfo.com/termofservice/" >Term of service</a>                  
                    <a href="http://japanguideinfo.com/externalwriter/" >Request to an external writer</a> 
                    <a href="http://japanguideinfo.com/request/" >Request for shooting/editing/advertising</a>  
                    <a href="http://japanguideinfo.com/inquiry/" >Contact us</a>          
                  </div>
                </div>
            </div>
          </div>
    `
  }
}
customElements.define('tw-footer', TwFooter)

// End Taiwan language Footer Part



//*********************************** Thai *********************************** */

// Thai language Header Part

class TaHeaderLanguage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="language">
    <div class="dropdown">
      <button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">
        Language
      </button>
      <div class="dropdown-menu mega-dropdown-menu">
        <a class="dropdown-item" href="http://japanguideinfo.com/">ENGLISH</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/jp/">日本語</a>
        <a class="dropdown-item"  href="http://japanguideinfo.com/kr/">한국어</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/cn/">中文 (简体)</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/tw/">中文 (繁體)</a>
      </div>
    </div>
  </div>
    `
  }
}
customElements.define('ta-header-language', TaHeaderLanguage)


class TaHeaderLink extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="menu_top">
    <nav class="navbar navbar-expand-lg p-0">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="bi bi-list"></i>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/ta/">HOME </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/ta/trend/">일본의 유행</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/ta/event/">일본 전통 축제와 이벤트 !</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/ta/shock/">컬쳐쇼크!</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/ta/interest/">체험형일본문화・투어</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/ta/howtotravel/">일본을 여행하는법</a>
          </li>
          <div class="menu_border"></div>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/ta/recommend/">추천 투어</a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/ta/travelersuggestion/">여행자가 제안하는 일본여행</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/ta/food/">일본 식문화</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/ta/city/">주요 도시 소개</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/ta/commonsense/">기초상식</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/ta/map/">도시맵</a>
          </li>
         
        </ul>
        
      </div>
    </nav>
  </div>
    `
  }
}
customElements.define('ta-header-link', TaHeaderLink)


// End Thai language Header Part



// Thai language Footer Part

class TaFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer_menu">
            <div class="item">
              <div class="title">
                <h6>Japan Travel  Guide info</h6>
               </div>
              <div class="link">
                  <a href="http://japanguideinfo.com/ta/trend/">일본의 유행</a>
                  <a href="http://japanguideinfo.com/ta/event/">일본 전통 축제와 이벤트 !</a>
                  <a href="http://japanguideinfo.com/ta/shock/">컬쳐쇼크!</a>
                  <a href="http://japanguideinfo.com/ta/interest/">체험형일본문화・투어</a>
                  <a href="http://japanguideinfo.com/ta/howtotravel/">일본을 여행하는법</a>
                  <a href="http://japanguideinfo.com/ta/recommend/">추천하는 투어</a>
                  <a href="http://japanguideinfo.com/ta/travelersuggestion/">여행자가 제안하는 일본여행</a>
                  <a href="http://japanguideinfo.com/ta/food/">일본 식문화</a>
                  <a href="http://japanguideinfo.com/ta/commonsense/">일본의 기초상식</a>
                  <a href="http://japanguideinfo.com/ta/map/">도시맵</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/ta/city/">주요 도시 소개</a></h6>
              </div>
              <div class="link">
                <p>
                  <a href="http://japanguideinfo.com/ta/city/Hokkaido/" >홋카이도 / </a>
                  <a href="http://japanguideinfo.com/ta/city/Aomori/" >아오모리 / </a>
                  <a href="http://japanguideinfo.com/ta/city/Akita/" >아키타</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/ta/city/sendai/" >미야기・센다이 / </a>
                  <a href="http://japanguideinfo.com/ta/city/Chiba/" >치바</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/ta/city/Tokyo/" >도쿄 / </a>
                  <a href="http://japanguideinfo.com/ta/city/Yokohama/" >카나가와・요코하마</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/ta/city/Niigata/" >니가타 / </a>
                  <a href="http://japanguideinfo.com/ta/city/Nagano/" >나가노</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/ta/city/Gifu/" >기후 / </a>
                  <a href="http://japanguideinfo.com/ta/city/Aichi/" >아이치・나고야</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/ta/city/Kyoto/" >교토 / </a>
                  <a href="http://japanguideinfo.com/ta/city/Nara/" >나라</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/ta/city/Osaka/" >오사카 / </a>
                  <a href="http://japanguideinfo.com/ta/city/Kobe/" >효고・코베</a>
                </p>
                <p> <a href="http://japanguideinfo.com/ta/city/Okayama/" >오카야마 / </a>
                    <a href="http://japanguideinfo.com/ta/city/Hiroshima/" >히로시마</a>
                </p>
                <a href="http://japanguideinfo.com/ta/city/Shikoku/" >시코쿠（토쿠시마 / 카가와 / 에히메 / 고치）</a>
          
                <a href="http://japanguideinfo.com/ta/city/Fukuoka/" >큐슈（후쿠오카 / 나가사키 / 쿠마모토） </a>
                <a href="http://japanguideinfo.com/ta/city/Okinawa/" >오키나와</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6>주요관광지</h6>
              </div>
              <div class="link">
              <a href="http://japanguideinfo.com/ta/spots/sightseeing/" >관광지</a>
              <a href="http://japanguideinfo.com/ta/spots/shopping/" >쇼핑</a>
              <a href="http://japanguideinfo.com/ta/spots/japanesegarden/" >일본정원・박물관</a>
              <a href="http://japanguideinfo.com/ta/spots/publicbaths/" >공중목욕탕</a>
              <a href="http://japanguideinfo.com/ta/spots/cherryblossomspots/" >벚꽃명소</a>
              <a href="http://japanguideinfo.com/ta/spots/beaches/" >해변</a>
              <a href="http://japanguideinfo.com/ta/spots/hotspring/" >온천</a>
              <a href="http://japanguideinfo.com/ta/spots/winterliiuminations/" >겨울 일루미네이션</a>
              <a href="http://japanguideinfo.com/ta/spots/snow/" >눈내리는 명소</a>
              <a href="http://japanguideinfo.com/ta/spots/instagrammablespot/" >인스타그램 명소</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6> <a href="http://japanguideinfo.com/ta/howtotravel/">일본을 여행하는법</a></h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/ta/howtotravel/BeforeDeparture/" >일본에 출발하기전 준비</a>
                <a href="http://japanguideinfo.com/ta/howtotravel/whilewaitingforflight/" >공항에 도착했을 때</a>
                <a href="http://japanguideinfo.com/ta/howtotravel/uponarrival/" >일본에 도착하면</a>
                <a href="http://japanguideinfo.com/ta/howtotravel/commonsense/" >일본의 기초상식</a>
                <a href="http://japanguideinfo.com/ta/howtotravel/train/" >전철 타는법</a>
                <a href="http://japanguideinfo.com/ta/howtotravel/japanrailpass/" >JR패스 이용법</a>
                <a href="http://japanguideinfo.com/ta/howtotravel/bus/" >버스 이용법</a>
                <a href="http://japanguideinfo.com/ta/howtotravel/rentacar/" >렌터카 이용법</a>
                <a href="http://japanguideinfo.com/ta/howtotravel/onsen/" >온천 이용법</a>
                <a href="http://japanguideinfo.com/ta/howtotravel/whenyougetlost/" >길을 잃었을 때</a>
                <a href="http://japanguideinfo.com/ta/howtotravel/basicjapanese/" >기초 일본어</a>
              </div>
            </div>

            
           
            <div class="item last_item">
             
                <div class="bottom_item">
                  <div class="title">
                    <h6>About us</h6>
                   </div>
                   <div class="link">
                    <a href="http://japanguideinfo.com/ta/" >Home</a>
                    <a href="http://japanguideinfo.com/web/" >About Korea Travel Guide Info</a> 
                    <a href="http://japanguideinfo.com/aboutus/" >Company Profile</a> 
                    <a href="http://japanguideinfo.com/advertisement/" ><b>Advertisement & Price list</b></a>
                    <a href="http://japanguideinfo.com/jp/advertisement/" ><b>広告＆料金表</b></a>
                    <a href="https://www.youtube.com/channel/UC0u7mVIpRdNehBanANORptA" target="blank" >YouTube Introduction</a>                  
                    <a href="http://japanguideinfo.com/JTGI/" target="blank" >SNS video streaming</a>                            
                    <a href="http://japanguideinfo.com/termofservice/" >Term of service</a>                  
                    <a href="http://japanguideinfo.com/externalwriter/" >Request to an external writer</a> 
                    <a href="http://japanguideinfo.com/request/" >Request for shooting/editing/advertising</a>  
                    <a href="http://japanguideinfo.com/inquiry/" >Contact us</a>          
                  </div>

                <div class="other_ln">
                  <ul>
                    <li><a href="http://japanguideinfo.com/es">1</a></li>
                    <li><a href="http://japanguideinfo.com/fr">2</a></li>
                    <li><a href="http://japanguideinfo.com/id">3</a></li>
                    <li><a href="http://japanguideinfo.com/pt">4</a></li>
                    <li><a href="http://japanguideinfo.com/my">5</a></li>
                    <li><a href="http://japanguideinfo.com/sa">6</a></li>
                    <li><a href="http://japanguideinfo.com/ta">7</a></li>
                    <li><a href="http://japanguideinfo.com/vn">8</a></li>
                  </ul>
                </div>
                
         
                
            </div>
           
           
          </div>
    `
  }
}
customElements.define('ta-footer', TaFooter)

// End Thai language Footer Part


//************************************* ES ********************************* */

// ES language Header Part

class EsHeaderLanguage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="language">
    <div class="dropdown">
      <button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">
        Language
      </button>
      <div class="dropdown-menu mega-dropdown-menu">
        <a class="dropdown-item" href="http://japanguideinfo.com/">ENGLISH</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/jp/">日本語</a>
        <a class="dropdown-item"  href="http://japanguideinfo.com/kr/">한국어</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/cn/">中文 (简体)</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/tw/">中文 (繁體)</a>
      </div>
    </div>
  </div>
    `
  }
}
customElements.define('es-header-language', EsHeaderLanguage)


class EsHeaderLink extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="menu_top">
    <nav class="navbar navbar-expand-lg p-0">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="bi bi-list"></i>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/es/">HOME </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/es/trend/">일본의 유행</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/es/event/">일본 전통 축제와 이벤트 !</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/es/shock/">컬쳐쇼크!</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/es/interest/">체험형일본문화・투어</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/es/howtotravel/">일본을 여행하는법</a>
          </li>
          <div class="menu_border"></div>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/es/recommend/">추천 투어</a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/es/travelersuggestion/">여행자가 제안하는 일본여행</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/es/food/">일본 식문화</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/es/city/">주요 도시 소개</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/es/commonsense/">기초상식</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/es/map/">도시맵</a>
          </li>
         
        </ul>
        
      </div>
    </nav>
  </div>
    `
  }
}
customElements.define('es-header-link', EsHeaderLink)


// End ES language Header Part



// ES language Footer Part

class EsFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer_menu">
            <div class="item">
              <div class="title">
                <h6>Japan Travel  Guide info</h6>
               </div>
              <div class="link">
                  <a href="http://japanguideinfo.com/es/trend/">일본의 유행</a>
                  <a href="http://japanguideinfo.com/es/event/">일본 전통 축제와 이벤트 !</a>
                  <a href="http://japanguideinfo.com/es/shock/">컬쳐쇼크!</a>
                  <a href="http://japanguideinfo.com/es/interest/">체험형일본문화・투어</a>
                  <a href="http://japanguideinfo.com/es/howtotravel/">일본을 여행하는법</a>
                  <a href="http://japanguideinfo.com/es/recommend/">추천하는 투어</a>
                  <a href="http://japanguideinfo.com/es/travelersuggestion/">여행자가 제안하는 일본여행</a>
                  <a href="http://japanguideinfo.com/es/food/">일본 식문화</a>
                  <a href="http://japanguideinfo.com/es/commonsense/">일본의 기초상식</a>
                  <a href="http://japanguideinfo.com/es/map/">도시맵</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/es/city/">주요 도시 소개</a></h6>
              </div>
              <div class="link">
                <p>
                  <a href="http://japanguideinfo.com/es/city/Hokkaido/" >홋카이도 / </a>
                  <a href="http://japanguideinfo.com/es/city/Aomori/" >아오모리 / </a>
                  <a href="http://japanguideinfo.com/es/city/Akita/" >아키타</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/es/city/sendai/" >미야기・센다이 / </a>
                  <a href="http://japanguideinfo.com/es/city/Chiba/" >치바</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/es/city/Tokyo/" >도쿄 / </a>
                  <a href="http://japanguideinfo.com/es/city/Yokohama/" >카나가와・요코하마</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/es/city/Niigata/" >니가타 / </a>
                  <a href="http://japanguideinfo.com/es/city/Nagano/" >나가노</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/es/city/Gifu/" >기후 / </a>
                  <a href="http://japanguideinfo.com/es/city/Aichi/" >아이치・나고야</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/es/city/Kyoto/" >교토 / </a>
                  <a href="http://japanguideinfo.com/es/city/Nara/" >나라</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/es/city/Osaka/" >오사카 / </a>
                  <a href="http://japanguideinfo.com/es/city/Kobe/" >효고・코베</a>
                </p>
                <p> <a href="http://japanguideinfo.com/es/city/Okayama/" >오카야마 / </a>
                    <a href="http://japanguideinfo.com/es/city/Hiroshima/" >히로시마</a>
                </p>
                <a href="http://japanguideinfo.com/es/city/Shikoku/" >시코쿠（토쿠시마 / 카가와 / 에히메 / 고치）</a>
          
                <a href="http://japanguideinfo.com/es/city/Fukuoka/" >큐슈（후쿠오카 / 나가사키 / 쿠마모토） </a>
                <a href="http://japanguideinfo.com/es/city/Okinawa/" >오키나와</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6>주요관광지</h6>
              </div>
              <div class="link">
              <a href="http://japanguideinfo.com/es/spots/sightseeing/" >관광지</a>
              <a href="http://japanguideinfo.com/es/spots/shopping/" >쇼핑</a>
              <a href="http://japanguideinfo.com/es/spots/japanesegarden/" >일본정원・박물관</a>
              <a href="http://japanguideinfo.com/es/spots/publicbaths/" >공중목욕탕</a>
              <a href="http://japanguideinfo.com/es/spots/cherryblossomspots/" >벚꽃명소</a>
              <a href="http://japanguideinfo.com/es/spots/beaches/" >해변</a>
              <a href="http://japanguideinfo.com/es/spots/hotspring/" >온천</a>
              <a href="http://japanguideinfo.com/es/spots/winterliiuminations/" >겨울 일루미네이션</a>
              <a href="http://japanguideinfo.com/es/spots/snow/" >눈내리는 명소</a>
              <a href="http://japanguideinfo.com/es/spots/instagrammablespot/" >인스타그램 명소</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6> <a href="http://japanguideinfo.com/es/howtotravel/">일본을 여행하는법</a></h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/es/howtotravel/BeforeDeparture/" >일본에 출발하기전 준비</a>
                <a href="http://japanguideinfo.com/es/howtotravel/whilewaitingforflight/" >공항에 도착했을 때</a>
                <a href="http://japanguideinfo.com/es/howtotravel/uponarrival/" >일본에 도착하면</a>
                <a href="http://japanguideinfo.com/es/howtotravel/commonsense/" >일본의 기초상식</a>
                <a href="http://japanguideinfo.com/es/howtotravel/train/" >전철 타는법</a>
                <a href="http://japanguideinfo.com/es/howtotravel/japanrailpass/" >JR패스 이용법</a>
                <a href="http://japanguideinfo.com/es/howtotravel/bus/" >버스 이용법</a>
                <a href="http://japanguideinfo.com/es/howtotravel/rentacar/" >렌터카 이용법</a>
                <a href="http://japanguideinfo.com/es/howtotravel/onsen/" >온천 이용법</a>
                <a href="http://japanguideinfo.com/es/howtotravel/whenyougetlost/" >길을 잃었을 때</a>
                <a href="http://japanguideinfo.com/es/howtotravel/basicjapanese/" >기초 일본어</a>
              </div>
            </div>

            
           
            <div class="item last_item">
             
                <div class="bottom_item">
                  <div class="title">
                    <h6>About us</h6>
                   </div>
                   <div class="link">
                    <a href="http://japanguideinfo.com/es/" >Home</a>
                    <a href="http://japanguideinfo.com/web/" >About Korea Travel Guide Info</a> 
                    <a href="http://japanguideinfo.com/aboutus/" >Company Profile</a> 
                    <a href="http://japanguideinfo.com/advertisement/" ><b>Advertisement & Price list</b></a>
                    <a href="http://japanguideinfo.com/jp/advertisement/" ><b>広告＆料金表</b></a>
                    <a href="https://www.youtube.com/channel/UC0u7mVIpRdNehBanANORptA" target="blank" >YouTube Introduction</a>                  
                    <a href="http://japanguideinfo.com/JTGI/" target="blank" >SNS video streaming</a>                            
                    <a href="http://japanguideinfo.com/termofservice/" >Term of service</a>                  
                    <a href="http://japanguideinfo.com/externalwriter/" >Request to an external writer</a> 
                    <a href="http://japanguideinfo.com/request/" >Request for shooting/editing/advertising</a>  
                    <a href="http://japanguideinfo.com/inquiry/" >Contact us</a>          
                  </div>
                </div>
                <div class="other_ln">
                  <ul>
                    <li><a href="http://japanguideinfo.com/es">1</a></li>
                    <li><a href="http://japanguideinfo.com/fr">2</a></li>
                    <li><a href="http://japanguideinfo.com/id">3</a></li>
                    <li><a href="http://japanguideinfo.com/pt">4</a></li>
                    <li><a href="http://japanguideinfo.com/my">5</a></li>
                    <li><a href="http://japanguideinfo.com/sa">6</a></li>
                    <li><a href="http://japanguideinfo.com/ta">7</a></li>
                    <li><a href="http://japanguideinfo.com/vn">8</a></li>
                  </ul>
                </div>
                
         
                
            </div>
           
           
          </div>
    `
  }
}
customElements.define('es-footer', EsFooter)

// End ES language Footer Part


//*********************************** ID *********************************** */



//************************************* FR ********************************* */

// FR language Header Part

class FrHeaderLanguage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="language">
    <div class="dropdown">
      <button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">
        Language
      </button>
      <div class="dropdown-menu mega-dropdown-menu">
        <a class="dropdown-item" href="http://japanguideinfo.com/">ENGLISH</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/jp/">日本語</a>
        <a class="dropdown-item"  href="http://japanguideinfo.com/kr/">한국어</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/cn/">中文 (简体)</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/tw/">中文 (繁體)</a>
      </div>
    </div>
  </div>
    `
  }
}
customElements.define('fr-header-language', FrHeaderLanguage)


class FrHeaderLink extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="menu_top">
    <nav class="navbar navbar-expand-lg p-0">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="bi bi-list"></i>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/fr/">HOME </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/fr/trend/">일본의 유행</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/fr/event/">일본 전통 축제와 이벤트 !</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/fr/shock/">컬쳐쇼크!</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/fr/interest/">체험형일본문화・투어</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/fr/howtotravel/">일본을 여행하는법</a>
          </li>
          <div class="menu_border"></div>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/fr/recommend/">추천 투어</a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/fr/travelersuggestion/">여행자가 제안하는 일본여행</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/fr/food/">일본 식문화</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/fr/city/">주요 도시 소개</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/fr/commonsense/">기초상식</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/fr/map/">도시맵</a>
          </li>
         
        </ul>
        
      </div>
    </nav>
  </div>
    `
  }
}
customElements.define('fr-header-link', FrHeaderLink)


// End FR language Header Part



// FR language Footer Part

class FrFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer_menu">
            <div class="item">
              <div class="title">
                <h6>Japan Travel  Guide info</h6>
               </div>
              <div class="link">
                  <a href="http://japanguideinfo.com/fr/trend/">일본의 유행</a>
                  <a href="http://japanguideinfo.com/fr/event/">일본 전통 축제와 이벤트 !</a>
                  <a href="http://japanguideinfo.com/fr/shock/">컬쳐쇼크!</a>
                  <a href="http://japanguideinfo.com/fr/interest/">체험형일본문화・투어</a>
                  <a href="http://japanguideinfo.com/fr/howtotravel/">일본을 여행하는법</a>
                  <a href="http://japanguideinfo.com/fr/recommend/">추천하는 투어</a>
                  <a href="http://japanguideinfo.com/fr/travelersuggestion/">여행자가 제안하는 일본여행</a>
                  <a href="http://japanguideinfo.com/fr/food/">일본 식문화</a>
                  <a href="http://japanguideinfo.com/fr/commonsense/">일본의 기초상식</a>
                  <a href="http://japanguideinfo.com/fr/map/">도시맵</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/fr/city/">주요 도시 소개</a></h6>
              </div>
              <div class="link">
                <p>
                  <a href="http://japanguideinfo.com/fr/city/Hokkaido/" >홋카이도 / </a>
                  <a href="http://japanguideinfo.com/fr/city/Aomori/" >아오모리 / </a>
                  <a href="http://japanguideinfo.com/fr/city/Akita/" >아키타</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/fr/city/sendai/" >미야기・센다이 / </a>
                  <a href="http://japanguideinfo.com/fr/city/Chiba/" >치바</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/fr/city/Tokyo/" >도쿄 / </a>
                  <a href="http://japanguideinfo.com/fr/city/Yokohama/" >카나가와・요코하마</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/fr/city/Niigata/" >니가타 / </a>
                  <a href="http://japanguideinfo.com/fr/city/Nagano/" >나가노</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/fr/city/Gifu/" >기후 / </a>
                  <a href="http://japanguideinfo.com/fr/city/Aichi/" >아이치・나고야</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/fr/city/Kyoto/" >교토 / </a>
                  <a href="http://japanguideinfo.com/fr/city/Nara/" >나라</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/fr/city/Osaka/" >오사카 / </a>
                  <a href="http://japanguideinfo.com/fr/city/Kobe/" >효고・코베</a>
                </p>
                <p> <a href="http://japanguideinfo.com/fr/city/Okayama/" >오카야마 / </a>
                    <a href="http://japanguideinfo.com/fr/city/Hiroshima/" >히로시마</a>
                </p>
                <a href="http://japanguideinfo.com/fr/city/Shikoku/" >시코쿠（토쿠시마 / 카가와 / 에히메 / 고치）</a>
          
                <a href="http://japanguideinfo.com/fr/city/Fukuoka/" >큐슈（후쿠오카 / 나가사키 / 쿠마모토） </a>
                <a href="http://japanguideinfo.com/fr/city/Okinawa/" >오키나와</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6>주요관광지</h6>
              </div>
              <div class="link">
              <a href="http://japanguideinfo.com/fr/spots/sightseeing/" >관광지</a>
              <a href="http://japanguideinfo.com/fr/spots/shopping/" >쇼핑</a>
              <a href="http://japanguideinfo.com/fr/spots/japanesegarden/" >일본정원・박물관</a>
              <a href="http://japanguideinfo.com/fr/spots/publicbaths/" >공중목욕탕</a>
              <a href="http://japanguideinfo.com/fr/spots/cherryblossomspots/" >벚꽃명소</a>
              <a href="http://japanguideinfo.com/fr/spots/beaches/" >해변</a>
              <a href="http://japanguideinfo.com/fr/spots/hotspring/" >온천</a>
              <a href="http://japanguideinfo.com/fr/spots/winterliiuminations/" >겨울 일루미네이션</a>
              <a href="http://japanguideinfo.com/fr/spots/snow/" >눈내리는 명소</a>
              <a href="http://japanguideinfo.com/fr/spots/instagrammablespot/" >인스타그램 명소</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6> <a href="http://japanguideinfo.com/fr/howtotravel/">일본을 여행하는법</a></h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/fr/howtotravel/BeforeDeparture/" >일본에 출발하기전 준비</a>
                <a href="http://japanguideinfo.com/fr/howtotravel/whilewaitingforflight/" >공항에 도착했을 때</a>
                <a href="http://japanguideinfo.com/fr/howtotravel/uponarrival/" >일본에 도착하면</a>
                <a href="http://japanguideinfo.com/fr/howtotravel/commonsense/" >일본의 기초상식</a>
                <a href="http://japanguideinfo.com/fr/howtotravel/train/" >전철 타는법</a>
                <a href="http://japanguideinfo.com/fr/howtotravel/japanrailpass/" >JR패스 이용법</a>
                <a href="http://japanguideinfo.com/fr/howtotravel/bus/" >버스 이용법</a>
                <a href="http://japanguideinfo.com/fr/howtotravel/rentacar/" >렌터카 이용법</a>
                <a href="http://japanguideinfo.com/fr/howtotravel/onsen/" >온천 이용법</a>
                <a href="http://japanguideinfo.com/fr/howtotravel/whenyougetlost/" >길을 잃었을 때</a>
                <a href="http://japanguideinfo.com/fr/howtotravel/basicjapanese/" >기초 일본어</a>
              </div>
            </div>

            
           
            <div class="item last_item">
             
                <div class="bottom_item">
                  <div class="title">
                    <h6>About us</h6>
                   </div>
                   <div class="link">
                    <a href="http://japanguideinfo.com/fr/" >Home</a>
                    <a href="http://japanguideinfo.com/web/" >About Korea Travel Guide Info</a> 
                    <a href="http://japanguideinfo.com/aboutus/" >Company Profile</a> 
                    <a href="http://japanguideinfo.com/advertisement/" ><b>Advertisement & Price list</b></a>
                    <a href="http://japanguideinfo.com/jp/advertisement/" ><b>広告＆料金表</b></a>
                    <a href="https://www.youtube.com/channel/UC0u7mVIpRdNehBanANORptA" target="blank" >YouTube Introduction</a>                  
                    <a href="http://japanguideinfo.com/JTGI/" target="blank" >SNS video streaming</a>                            
                    <a href="http://japanguideinfo.com/termofservice/" >Term of service</a>                  
                    <a href="http://japanguideinfo.com/externalwriter/" >Request to an external writer</a> 
                    <a href="http://japanguideinfo.com/request/" >Request for shooting/editing/advertising</a>  
                    <a href="http://japanguideinfo.com/inquiry/" >Contact us</a>          
                  </div>
                </div>
                <div class="other_ln">
                  <ul>
                    <li><a href="http://japanguideinfo.com/es">1</a></li>
                    <li><a href="http://japanguideinfo.com/fr">2</a></li>
                    <li><a href="http://japanguideinfo.com/id">3</a></li>
                    <li><a href="http://japanguideinfo.com/pt">4</a></li>
                    <li><a href="http://japanguideinfo.com/my">5</a></li>
                    <li><a href="http://japanguideinfo.com/sa">6</a></li>
                    <li><a href="http://japanguideinfo.com/ta">7</a></li>
                    <li><a href="http://japanguideinfo.com/vn">8</a></li>
                  </ul>
                </div>
                
         
                
            </div>
           
           
          </div>
    `
  }
}
customElements.define('fr-footer', FrFooter)

// End FR language Footer Part


//*********************************** ID *********************************** */

// ID language Header Part

class IdHeaderLanguage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="language">
    <div class="dropdown">
      <button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">
        Language
      </button>
      <div class="dropdown-menu mega-dropdown-menu">
        <a class="dropdown-item" href="http://japanguideinfo.com/">ENGLISH</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/jp/">日本語</a>
        <a class="dropdown-item"  href="http://japanguideinfo.com/kr/">한국어</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/cn/">中文 (简体)</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/tw/">中文 (繁體)</a>
      </div>
    </div>
  </div>
    `
  }
}
customElements.define('id-header-language', IdHeaderLanguage)


class IdHeaderLink extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="menu_top">
    <nav class="navbar navbar-expand-lg p-0">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="bi bi-list"></i>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/id/">HOME </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/id/trend/">일본의 유행</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/id/event/">일본 전통 축제와 이벤트 !</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/id/shock/">컬쳐쇼크!</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/id/interest/">체험형일본문화・투어</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/id/howtotravel/">일본을 여행하는법</a>
          </li>
          <div class="menu_border"></div>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/id/recommend/">추천 투어</a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/id/travelersuggestion/">여행자가 제안하는 일본여행</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/id/food/">일본 식문화</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/id/city/">주요 도시 소개</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/id/commonsense/">기초상식</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/id/map/">도시맵</a>
          </li>
         
        </ul>
        
      </div>
    </nav>
  </div>
    `
  }
}
customElements.define('id-header-link', IdHeaderLink)


// End ID language Header Part



// ID language Footer Part

class IdFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer_menu">
            <div class="item">
              <div class="title">
                <h6>Japan Travel  Guide info</h6>
               </div>
              <div class="link">
                  <a href="http://japanguideinfo.com/id/trend/">일본의 유행</a>
                  <a href="http://japanguideinfo.com/id/event/">일본 전통 축제와 이벤트 !</a>
                  <a href="http://japanguideinfo.com/id/shock/">컬쳐쇼크!</a>
                  <a href="http://japanguideinfo.com/id/interest/">체험형일본문화・투어</a>
                  <a href="http://japanguideinfo.com/id/howtotravel/">일본을 여행하는법</a>
                  <a href="http://japanguideinfo.com/id/recommend/">추천하는 투어</a>
                  <a href="http://japanguideinfo.com/id/travelersuggestion/">여행자가 제안하는 일본여행</a>
                  <a href="http://japanguideinfo.com/id/food/">일본 식문화</a>
                  <a href="http://japanguideinfo.com/id/commonsense/">일본의 기초상식</a>
                  <a href="http://japanguideinfo.com/id/map/">도시맵</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/id/city/">주요 도시 소개</a></h6>
              </div>
              <div class="link">
                <p>
                  <a href="http://japanguideinfo.com/id/city/Hokkaido/" >홋카이도 / </a>
                  <a href="http://japanguideinfo.com/id/city/Aomori/" >아오모리 / </a>
                  <a href="http://japanguideinfo.com/id/city/Akita/" >아키타</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/id/city/sendai/" >미야기・센다이 / </a>
                  <a href="http://japanguideinfo.com/id/city/Chiba/" >치바</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/id/city/Tokyo/" >도쿄 / </a>
                  <a href="http://japanguideinfo.com/id/city/Yokohama/" >카나가와・요코하마</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/id/city/Niigata/" >니가타 / </a>
                  <a href="http://japanguideinfo.com/id/city/Nagano/" >나가노</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/id/city/Gifu/" >기후 / </a>
                  <a href="http://japanguideinfo.com/id/city/Aichi/" >아이치・나고야</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/id/city/Kyoto/" >교토 / </a>
                  <a href="http://japanguideinfo.com/id/city/Nara/" >나라</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/id/city/Osaka/" >오사카 / </a>
                  <a href="http://japanguideinfo.com/id/city/Kobe/" >효고・코베</a>
                </p>
                <p> <a href="http://japanguideinfo.com/id/city/Okayama/" >오카야마 / </a>
                    <a href="http://japanguideinfo.com/id/city/Hiroshima/" >히로시마</a>
                </p>
                <a href="http://japanguideinfo.com/id/city/Shikoku/" >시코쿠（토쿠시마 / 카가와 / 에히메 / 고치）</a>
          
                <a href="http://japanguideinfo.com/id/city/Fukuoka/" >큐슈（후쿠오카 / 나가사키 / 쿠마모토） </a>
                <a href="http://japanguideinfo.com/id/city/Okinawa/" >오키나와</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6>주요관광지</h6>
              </div>
              <div class="link">
              <a href="http://japanguideinfo.com/id/spots/sightseeing/" >관광지</a>
              <a href="http://japanguideinfo.com/id/spots/shopping/" >쇼핑</a>
              <a href="http://japanguideinfo.com/id/spots/japanesegarden/" >일본정원・박물관</a>
              <a href="http://japanguideinfo.com/id/spots/publicbaths/" >공중목욕탕</a>
              <a href="http://japanguideinfo.com/id/spots/cherryblossomspots/" >벚꽃명소</a>
              <a href="http://japanguideinfo.com/id/spots/beaches/" >해변</a>
              <a href="http://japanguideinfo.com/id/spots/hotspring/" >온천</a>
              <a href="http://japanguideinfo.com/id/spots/winterliiuminations/" >겨울 일루미네이션</a>
              <a href="http://japanguideinfo.com/id/spots/snow/" >눈내리는 명소</a>
              <a href="http://japanguideinfo.com/id/spots/instagrammablespot/" >인스타그램 명소</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6> <a href="http://japanguideinfo.com/id/howtotravel/">일본을 여행하는법</a></h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/id/howtotravel/BeforeDeparture/" >일본에 출발하기전 준비</a>
                <a href="http://japanguideinfo.com/id/howtotravel/whilewaitingforflight/" >공항에 도착했을 때</a>
                <a href="http://japanguideinfo.com/id/howtotravel/uponarrival/" >일본에 도착하면</a>
                <a href="http://japanguideinfo.com/id/howtotravel/commonsense/" >일본의 기초상식</a>
                <a href="http://japanguideinfo.com/id/howtotravel/train/" >전철 타는법</a>
                <a href="http://japanguideinfo.com/id/howtotravel/japanrailpass/" >JR패스 이용법</a>
                <a href="http://japanguideinfo.com/id/howtotravel/bus/" >버스 이용법</a>
                <a href="http://japanguideinfo.com/id/howtotravel/rentacar/" >렌터카 이용법</a>
                <a href="http://japanguideinfo.com/id/howtotravel/onsen/" >온천 이용법</a>
                <a href="http://japanguideinfo.com/id/howtotravel/whenyougetlost/" >길을 잃었을 때</a>
                <a href="http://japanguideinfo.com/id/howtotravel/basicjapanese/" >기초 일본어</a>
              </div>
            </div>

            
           
            <div class="item last_item">
             
                <div class="bottom_item">
                  <div class="title">
                    <h6>About us</h6>
                   </div>
                   <div class="link">
                    <a href="http://japanguideinfo.com/id/" >Home</a>
                    <a href="http://japanguideinfo.com/web/" >About Korea Travel Guide Info</a> 
                    <a href="http://japanguideinfo.com/aboutus/" >Company Profile</a> 
                    <a href="http://japanguideinfo.com/advertisement/" ><b>Advertisement & Price list</b></a>
                    <a href="http://japanguideinfo.com/jp/advertisement/" ><b>広告＆料金表</b></a>
                    <a href="https://www.youtube.com/channel/UC0u7mVIpRdNehBanANORptA" target="blank" >YouTube Introduction</a>                  
                    <a href="http://japanguideinfo.com/JTGI/" target="blank" >SNS video streaming</a>                            
                    <a href="http://japanguideinfo.com/termofservice/" >Term of service</a>                  
                    <a href="http://japanguideinfo.com/externalwriter/" >Request to an external writer</a> 
                    <a href="http://japanguideinfo.com/request/" >Request for shooting/editing/advertising</a>  
                    <a href="http://japanguideinfo.com/inquiry/" >Contact us</a>          
                  </div>
                </div>
                <div class="other_ln">
                  <ul>
                    <li><a href="http://japanguideinfo.com/es">1</a></li>
                    <li><a href="http://japanguideinfo.com/fr">2</a></li>
                    <li><a href="http://japanguideinfo.com/id">3</a></li>
                    <li><a href="http://japanguideinfo.com/pt">4</a></li>
                    <li><a href="http://japanguideinfo.com/my">5</a></li>
                    <li><a href="http://japanguideinfo.com/sa">6</a></li>
                    <li><a href="http://japanguideinfo.com/ta">7</a></li>
                    <li><a href="http://japanguideinfo.com/vn">8</a></li>
                  </ul>
                </div>
                
         
                
            </div>
           
           
          </div>
    `
  }
}
customElements.define('id-footer', IdFooter)

// End ID language Footer Part


//*********************************** MY *********************************** */

// MY language Header Part

class MyyHeaderLanguage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="language">
    <div class="dropdown">
      <button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">
        Language
      </button>
      <div class="dropdown-menu mega-dropdown-menu">
        <a class="dropdown-item" href="http://japanguideinfo.com/">ENGLISH</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/jp/">日本語</a>
        <a class="dropdown-item"  href="http://japanguideinfo.com/kr/">한국어</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/cn/">中文 (简体)</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/tw/">中文 (繁體)</a>
      </div>
    </div>
  </div>
    `
  }
}
customElements.define('myy-header-language', MyyHeaderLanguage)


class MyyHeaderLink extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="menu_top">
    <nav class="navbar navbar-expand-lg p-0">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="bi bi-list"></i>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/my/">HOME </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/my/trend/">Trend di Jepun</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/my/event/">Festival & Acara</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/my/shock/">Kejutan budaya</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/my/interest/">Pengalaman budaya Jepun & lawatan</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/my/howtotravel/">Cara bijak melancong di Jepun</a>
          </li>
          <div class="menu_border"></div>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/my/recommend/">Pakej lawatan menarik</a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/my/travelersuggestion/">Cadangan tarikan pelancong</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/my/food/">Budaya makanan Jepun</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/my/city/">Pengenalan bandar dan pekan utama</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/my/commonsense/">Peraturan tempatan Jepun</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/my/map/">Peta bandar Jepun</a>
          </li>
         
        </ul>
        
      </div>
    </nav>
  </div>
    `
  }
}
customElements.define('myy-header-link', MyyHeaderLink)


// End MY language Header Part



// MY language Footer Part

class MyyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer_menu">
            <div class="item">
              <div class="title">
                <h6>Maklumat Japan travel guide</h6>
               </div>
              <div class="link">
                  <a href="http://japanguideinfo.com/my/trend/">trend di Jepun</a>
                  <a href="http://japanguideinfo.com/my/event/">Perayaan dan acara Jepun!</a>
                  <a href="http://japanguideinfo.com/my/shock/">Kejutan budaya</a>
                  <a href="http://japanguideinfo.com/my/interest/">Pengalaman budaya Jepun/pakej lawatan</a>
                  <a href="http://japanguideinfo.com/my/howtotravel/">Cara terbaik melancong di Jepun</a>
                  <a href="http://japanguideinfo.com/my/recommend/">Pakej Lawatan menarik</a>
                  <a href="http://japanguideinfo.com/my/travelersuggestion/">Cadangan tarikan pelancong</a>
                  <a href="http://japanguideinfo.com/my/food/">Budaya makanan Jepun</a>
                  <a href="http://japanguideinfo.com/my/commonsense/">Peraturan tempatan Jepun</a>
                  <a href="http://japanguideinfo.com/my/map/">Peta bandar Jepun</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/my/city/">Pengenalan bandar dan pekan utama</a></h6>
              </div>
              <div class="link">
                <p>
                  <a href="http://japanguideinfo.com/my/city/Hokkaido/" >Hokkaido / </a>
                  <a href="http://japanguideinfo.com/my/city/Aomori/" >Aomori / </a>
                  <a href="http://japanguideinfo.com/my/city/Akita/" >Akita</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/my/city/sendai/" >Miyagi・Sendai / </a>
                  <a href="http://japanguideinfo.com/my/city/Chiba/" >Chiba</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/my/city/Tokyo/" >Tokyo / </a>
                  <a href="http://japanguideinfo.com/my/city/Yokohama/" >Kanagawa・Yokohama</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/my/city/Niigata/" >Niigata / </a>
                  <a href="http://japanguideinfo.com/my/city/Nagano/" >Nagano</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/my/city/Gifu/" >Gifu / </a>
                  <a href="http://japanguideinfo.com/my/city/Aichi/" >Aichi・Nagoya</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/my/city/Kyoto/" >Kyoto / </a>
                  <a href="http://japanguideinfo.com/my/city/Nara/" >Nara</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/my/city/Osaka/" >Osaka / </a>
                  <a href="http://japanguideinfo.com/my/city/Kobe/" >Hyogo・Kobe</a>
                </p>
                <p> <a href="http://japanguideinfo.com/my/city/Okayama/" >Okayama / </a>
                    <a href="http://japanguideinfo.com/my/city/Hiroshima/" >Hiroshima</a>
                </p>
                <a href="http://japanguideinfo.com/my/city/Shikoku/" >Shikoku（Tokushima / Kagawa / Ehime / Kochi）</a>
          
                <a href="http://japanguideinfo.com/my/city/Fukuoka/" >Kyushu（Fukuoka / Nagasaki / Kumamoto） </a>
                <a href="http://japanguideinfo.com/my/city/Okinawa/" >Okinawa</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6>Tarikan utama pelancong</h6>
              </div>
              <div class="link">
              <a href="http://japanguideinfo.com/my/spots/sightseeing/" >Tarikan pelancong</a>
              <a href="http://japanguideinfo.com/my/spots/shopping/" >membeli belah</a>
              <a href="http://japanguideinfo.com/my/spots/japanesegarden/" >Taman Jepun / muzium </a>
              <a href="http://japanguideinfo.com/my/spots/publicbaths/" >Tempat mandi awam</a>
              <a href="http://japanguideinfo.com/my/spots/cherryblossomspots/" >Tempat melihat bunga sakura</a>
              <a href="http://japanguideinfo.com/my/spots/beaches/" >Pantai berdekatan</a>
              <a href="http://japanguideinfo.com/my/spots/hotspring/" >Onsen berdekatan</a>
              <a href="http://japanguideinfo.com/my/spots/winterliiuminations/" >Hiasan lampu musim sejuk berdekatan</a>
              <a href="http://japanguideinfo.com/my/spots/snow/" >Tempat salji berdekatan</a>
              <a href="http://japanguideinfo.com/my/spots/instagrammablespot/" >Tempat bergambar untuk instagram</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6> <a href="http://japanguideinfo.com/my/howtotravel/">Cara bijak melancong di Jepun</a></h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/my/howtotravel/BeforeDeparture/" >Persediaan sebelum ke Jepun</a>
                <a href="http://japanguideinfo.com/my/howtotravel/whilewaitingforflight/" >Apabila anda tiba di lapangan terbang</a>
                <a href="http://japanguideinfo.com/my/howtotravel/uponarrival/" >Apabila anda tiba di Jepun</a>
                <a href="http://japanguideinfo.com/my/howtotravel/commonsense/" >peraturan tempatan Jepun</a>
                <a href="http://japanguideinfo.com/my/howtotravel/train/" >Bagaimana untuk menaiki kereta api</a>
                <a href="http://japanguideinfo.com/my/howtotravel/japanrailpass/" >Pas JR</a>
                <a href="http://japanguideinfo.com/my/howtotravel/bus/" >Cara menaiki bas</a>
                <a href="http://japanguideinfo.com/my/howtotravel/rentacar/" >Cara untuk menyewa kereta</a>
                <a href="http://japanguideinfo.com/my/howtotravel/onsen/" >Cara memasuki onsen</a>
                <a href="http://japanguideinfo.com/my/howtotravel/whenyougetlost/" >Saya tidak tahu bagaimana untuk sampai ke destinasi saya</a>
                <a href="http://japanguideinfo.com/my/howtotravel/basicjapanese/" >Ungkapan dalam bahasa Jepun yang boleh digunakan semasa melancong</a>
              </div>
            </div>

            
           
            <div class="item last_item">
             
                <div class="bottom_item">
                  <div class="title">
                    <h6>About us</h6>
                   </div>
                   <div class="link">
                   <br>
                    <a href="http://japanguideinfo.com/my/" >Home</a>
                    <a href="http://japanguideinfo.com/web/" >About Korea Travel Guide Info</a> 
                    <a href="http://japanguideinfo.com/aboutus/" >Company Profile</a> 
                    <a href="http://japanguideinfo.com/advertisement/" ><b>Advertisement & Price list</b></a>
                    <a href="http://japanguideinfo.com/jp/advertisement/" ><b>広告＆料金表</b></a>
                    <a href="https://www.youtube.com/channel/UC0u7mVIpRdNehBanANORptA" target="blank" >YouTube Introduction</a>                  
                    <a href="http://japanguideinfo.com/JTGI/" target="blank" >SNS video streaming</a>                            
                    <a href="http://japanguideinfo.com/termofservice/" >Term of service</a>                  
                    <a href="http://japanguideinfo.com/externalwriter/" >Request to an external writer</a> 
                    <a href="http://japanguideinfo.com/request/" >Request for shooting/editing/advertising</a>  
                    <a href="http://japanguideinfo.com/inquiry/" >Contact us</a>          
                  </div>
                </div>
                
                
         
                
            </div>
           
           
          </div>
    `
  }
}
customElements.define('myy-footer', MyyFooter)

// End MY language Footer Part


//*********************************** PT *********************************** */

// PT language Header Part

class PtHeaderLanguage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="language">
    <div class="dropdown">
      <button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">
        Language
      </button>
      <div class="dropdown-menu mega-dropdown-menu">
        <a class="dropdown-item" href="http://japanguideinfo.com/">ENGLISH</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/jp/">日本語</a>
        <a class="dropdown-item"  href="http://japanguideinfo.com/kr/">한국어</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/cn/">中文 (简体)</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/tw/">中文 (繁體)</a>
      </div>
    </div>
  </div>
    `
  }
}
customElements.define('pt-header-language', PtHeaderLanguage)


class PtHeaderLink extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="menu_top">
    <nav class="navbar navbar-expand-lg p-0">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="bi bi-list"></i>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/pt/">HOME </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/pt/trend/">일본의 유행</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/pt/event/">일본 전통 축제와 이벤트 !</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/pt/shock/">컬쳐쇼크!</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/pt/interest/">체험형일본문화・투어</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/pt/howtotravel/">일본을 여행하는법</a>
          </li>
          <div class="menu_border"></div>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/pt/recommend/">추천 투어</a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/pt/travelersuggestion/">여행자가 제안하는 일본여행</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/pt/food/">일본 식문화</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/pt/city/">주요 도시 소개</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/pt/commonsense/">기초상식</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/pt/map/">도시맵</a>
          </li>
         
        </ul>
        
      </div>
    </nav>
  </div>
    `
  }
}
customElements.define('pt-header-link', PtHeaderLink)


// End PT language Header Part



// PT language Footer Part

class PtFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer_menu">
            <div class="item">
              <div class="title">
                <h6>Japan Travel  Guide info</h6>
               </div>
              <div class="link">
                  <a href="http://japanguideinfo.com/pt/trend/">일본의 유행</a>
                  <a href="http://japanguideinfo.com/pt/event/">일본 전통 축제와 이벤트 !</a>
                  <a href="http://japanguideinfo.com/pt/shock/">컬쳐쇼크!</a>
                  <a href="http://japanguideinfo.com/pt/interest/">체험형일본문화・투어</a>
                  <a href="http://japanguideinfo.com/pt/howtotravel/">일본을 여행하는법</a>
                  <a href="http://japanguideinfo.com/pt/recommend/">추천하는 투어</a>
                  <a href="http://japanguideinfo.com/pt/travelersuggestion/">여행자가 제안하는 일본여행</a>
                  <a href="http://japanguideinfo.com/pt/food/">일본 식문화</a>
                  <a href="http://japanguideinfo.com/pt/commonsense/">일본의 기초상식</a>
                  <a href="http://japanguideinfo.com/pt/map/">도시맵</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/pt/city/">주요 도시 소개</a></h6>
              </div>
              <div class="link">
                <p>
                  <a href="http://japanguideinfo.com/pt/city/Hokkaido/" >홋카이도 / </a>
                  <a href="http://japanguideinfo.com/pt/city/Aomori/" >아오모리 / </a>
                  <a href="http://japanguideinfo.com/pt/city/Akita/" >아키타</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/pt/city/sendai/" >미야기・센다이 / </a>
                  <a href="http://japanguideinfo.com/pt/city/Chiba/" >치바</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/pt/city/Tokyo/" >도쿄 / </a>
                  <a href="http://japanguideinfo.com/pt/city/Yokohama/" >카나가와・요코하마</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/pt/city/Niigata/" >니가타 / </a>
                  <a href="http://japanguideinfo.com/pt/city/Nagano/" >나가노</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/pt/city/Gifu/" >기후 / </a>
                  <a href="http://japanguideinfo.com/pt/city/Aichi/" >아이치・나고야</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/pt/city/Kyoto/" >교토 / </a>
                  <a href="http://japanguideinfo.com/pt/city/Nara/" >나라</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/pt/city/Osaka/" >오사카 / </a>
                  <a href="http://japanguideinfo.com/pt/city/Kobe/" >효고・코베</a>
                </p>
                <p> <a href="http://japanguideinfo.com/pt/city/Okayama/" >오카야마 / </a>
                    <a href="http://japanguideinfo.com/pt/city/Hiroshima/" >히로시마</a>
                </p>
                <a href="http://japanguideinfo.com/pt/city/Shikoku/" >시코쿠（토쿠시마 / 카가와 / 에히메 / 고치）</a>
          
                <a href="http://japanguideinfo.com/pt/city/Fukuoka/" >큐슈（후쿠오카 / 나가사키 / 쿠마모토） </a>
                <a href="http://japanguideinfo.com/pt/city/Okinawa/" >오키나와</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6>주요관광지</h6>
              </div>
              <div class="link">
              <a href="http://japanguideinfo.com/pt/spots/sightseeing/" >관광지</a>
              <a href="http://japanguideinfo.com/pt/spots/shopping/" >쇼핑</a>
              <a href="http://japanguideinfo.com/pt/spots/japanesegarden/" >일본정원・박물관</a>
              <a href="http://japanguideinfo.com/pt/spots/publicbaths/" >공중목욕탕</a>
              <a href="http://japanguideinfo.com/pt/spots/cherryblossomspots/" >벚꽃명소</a>
              <a href="http://japanguideinfo.com/pt/spots/beaches/" >해변</a>
              <a href="http://japanguideinfo.com/pt/spots/hotspring/" >온천</a>
              <a href="http://japanguideinfo.com/pt/spots/winterliiuminations/" >겨울 일루미네이션</a>
              <a href="http://japanguideinfo.com/pt/spots/snow/" >눈내리는 명소</a>
              <a href="http://japanguideinfo.com/pt/spots/instagrammablespot/" >인스타그램 명소</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6> <a href="http://japanguideinfo.com/pt/howtotravel/">일본을 여행하는법</a></h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/pt/howtotravel/BeforeDeparture/" >일본에 출발하기전 준비</a>
                <a href="http://japanguideinfo.com/pt/howtotravel/whilewaitingforflight/" >공항에 도착했을 때</a>
                <a href="http://japanguideinfo.com/pt/howtotravel/uponarrival/" >일본에 도착하면</a>
                <a href="http://japanguideinfo.com/pt/howtotravel/commonsense/" >일본의 기초상식</a>
                <a href="http://japanguideinfo.com/pt/howtotravel/train/" >전철 타는법</a>
                <a href="http://japanguideinfo.com/pt/howtotravel/japanrailpass/" >JR패스 이용법</a>
                <a href="http://japanguideinfo.com/pt/howtotravel/bus/" >버스 이용법</a>
                <a href="http://japanguideinfo.com/pt/howtotravel/rentacar/" >렌터카 이용법</a>
                <a href="http://japanguideinfo.com/pt/howtotravel/onsen/" >온천 이용법</a>
                <a href="http://japanguideinfo.com/pt/howtotravel/whenyougetlost/" >길을 잃었을 때</a>
                <a href="http://japanguideinfo.com/pt/howtotravel/basicjapanese/" >기초 일본어</a>
              </div>
            </div>

            
           
            <div class="item last_item">
             
                <div class="bottom_item">
                  <div class="title">
                    <h6>About us</h6>
                   </div>
                   <div class="link">
                    <a href="http://japanguideinfo.com/pt/" >Home</a>
                    <a href="http://japanguideinfo.com/web/" >About Korea Travel Guide Info</a> 
                    <a href="http://japanguideinfo.com/aboutus/" >Company Profile</a> 
                    <a href="http://japanguideinfo.com/advertisement/" ><b>Advertisement & Price list</b></a>
                    <a href="http://japanguideinfo.com/jp/advertisement/" ><b>広告＆料金表</b></a>
                    <a href="https://www.youtube.com/channel/UC0u7mVIpRdNehBanANORptA" target="blank" >YouTube Introduction</a>                  
                    <a href="http://japanguideinfo.com/JTGI/" target="blank" >SNS video streaming</a>                            
                    <a href="http://japanguideinfo.com/termofservice/" >Term of service</a>                  
                    <a href="http://japanguideinfo.com/externalwriter/" >Request to an external writer</a> 
                    <a href="http://japanguideinfo.com/request/" >Request for shooting/editing/advertising</a>  
                    <a href="http://japanguideinfo.com/inquiry/" >Contact us</a>          
                  </div>
                </div>
                <div class="other_ln">
                  <ul>
                    <li><a href="http://japanguideinfo.com/es">1</a></li>
                    <li><a href="http://japanguideinfo.com/fr">2</a></li>
                    <li><a href="http://japanguideinfo.com/id">3</a></li>
                    <li><a href="http://japanguideinfo.com/pt">4</a></li>
                    <li><a href="http://japanguideinfo.com/my">5</a></li>
                    <li><a href="http://japanguideinfo.com/sa">6</a></li>
                    <li><a href="http://japanguideinfo.com/ta">7</a></li>
                    <li><a href="http://japanguideinfo.com/vn">8</a></li>
                  </ul>
                </div>
                
         
                
            </div>
           
           
          </div>
    `
  }
}
customElements.define('pt-footer', PtFooter)

// End PT language Footer Part


//*********************************** SA *********************************** */

// SA language Header Part

class SaHeaderLanguage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="language">
    <div class="dropdown">
      <button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">
        Language
      </button>
      <div class="dropdown-menu mega-dropdown-menu">
        <a class="dropdown-item" href="http://japanguideinfo.com/">ENGLISH</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/jp/">日本語</a>
        <a class="dropdown-item"  href="http://japanguideinfo.com/kr/">한국어</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/cn/">中文 (简体)</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/tw/">中文 (繁體)</a>
      </div>
    </div>
  </div>
    `
  }
}
customElements.define('sa-header-language', SaHeaderLanguage)


class SaHeaderLink extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="menu_top">
    <nav class="navbar navbar-expand-lg p-0">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="bi bi-list"></i>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/sa/">HOME </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/sa/trend/">일본의 유행</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/sa/event/">일본 전통 축제와 이벤트 !</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/sa/shock/">컬쳐쇼크!</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/sa/interest/">체험형일본문화・투어</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/sa/howtotravel/">일본을 여행하는법</a>
          </li>
          <div class="menu_border"></div>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/sa/recommend/">추천 투어</a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/sa/travelersuggestion/">여행자가 제안하는 일본여행</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/sa/food/">일본 식문화</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/sa/city/">주요 도시 소개</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/sa/commonsense/">기초상식</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/sa/map/">도시맵</a>
          </li>
         
        </ul>
        
      </div>
    </nav>
  </div>
    `
  }
}
customElements.define('sa-header-link', SaHeaderLink)


// End SA language Header Part



// SA language Footer Part

class SaFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer_menu">
            <div class="item">
              <div class="title">
                <h6>Japan Travel  Guide info</h6>
               </div>
              <div class="link">
                  <a href="http://japanguideinfo.com/sa/trend/">일본의 유행</a>
                  <a href="http://japanguideinfo.com/sa/event/">일본 전통 축제와 이벤트 !</a>
                  <a href="http://japanguideinfo.com/sa/shock/">컬쳐쇼크!</a>
                  <a href="http://japanguideinfo.com/sa/interest/">체험형일본문화・투어</a>
                  <a href="http://japanguideinfo.com/sa/howtotravel/">일본을 여행하는법</a>
                  <a href="http://japanguideinfo.com/sa/recommend/">추천하는 투어</a>
                  <a href="http://japanguideinfo.com/sa/travelersuggestion/">여행자가 제안하는 일본여행</a>
                  <a href="http://japanguideinfo.com/sa/food/">일본 식문화</a>
                  <a href="http://japanguideinfo.com/sa/commonsense/">일본의 기초상식</a>
                  <a href="http://japanguideinfo.com/sa/map/">도시맵</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/sa/city/">주요 도시 소개</a></h6>
              </div>
              <div class="link">
                <p>
                  <a href="http://japanguideinfo.com/sa/city/Hokkaido/" >홋카이도 / </a>
                  <a href="http://japanguideinfo.com/sa/city/Aomori/" >아오모리 / </a>
                  <a href="http://japanguideinfo.com/sa/city/Akita/" >아키타</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/sa/city/sendai/" >미야기・센다이 / </a>
                  <a href="http://japanguideinfo.com/sa/city/Chiba/" >치바</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/sa/city/Tokyo/" >도쿄 / </a>
                  <a href="http://japanguideinfo.com/sa/city/Yokohama/" >카나가와・요코하마</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/sa/city/Niigata/" >니가타 / </a>
                  <a href="http://japanguideinfo.com/sa/city/Nagano/" >나가노</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/sa/city/Gifu/" >기후 / </a>
                  <a href="http://japanguideinfo.com/sa/city/Aichi/" >아이치・나고야</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/sa/city/Kyoto/" >교토 / </a>
                  <a href="http://japanguideinfo.com/sa/city/Nara/" >나라</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/sa/city/Osaka/" >오사카 / </a>
                  <a href="http://japanguideinfo.com/sa/city/Kobe/" >효고・코베</a>
                </p>
                <p> <a href="http://japanguideinfo.com/sa/city/Okayama/" >오카야마 / </a>
                    <a href="http://japanguideinfo.com/sa/city/Hiroshima/" >히로시마</a>
                </p>
                <a href="http://japanguideinfo.com/sa/city/Shikoku/" >시코쿠（토쿠시마 / 카가와 / 에히메 / 고치）</a>
          
                <a href="http://japanguideinfo.com/sa/city/Fukuoka/" >큐슈（후쿠오카 / 나가사키 / 쿠마모토） </a>
                <a href="http://japanguideinfo.com/sa/city/Okinawa/" >오키나와</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6>주요관광지</h6>
              </div>
              <div class="link">
              <a href="http://japanguideinfo.com/sa/spots/sightseeing/" >관광지</a>
              <a href="http://japanguideinfo.com/sa/spots/shopping/" >쇼핑</a>
              <a href="http://japanguideinfo.com/sa/spots/japanesegarden/" >일본정원・박물관</a>
              <a href="http://japanguideinfo.com/sa/spots/publicbaths/" >공중목욕탕</a>
              <a href="http://japanguideinfo.com/sa/spots/cherryblossomspots/" >벚꽃명소</a>
              <a href="http://japanguideinfo.com/sa/spots/beaches/" >해변</a>
              <a href="http://japanguideinfo.com/sa/spots/hotspring/" >온천</a>
              <a href="http://japanguideinfo.com/sa/spots/winterliiuminations/" >겨울 일루미네이션</a>
              <a href="http://japanguideinfo.com/sa/spots/snow/" >눈내리는 명소</a>
              <a href="http://japanguideinfo.com/sa/spots/instagrammablespot/" >인스타그램 명소</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6> <a href="http://japanguideinfo.com/sa/howtotravel/">일본을 여행하는법</a></h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/sa/howtotravel/BeforeDeparture/" >일본에 출발하기전 준비</a>
                <a href="http://japanguideinfo.com/sa/howtotravel/whilewaitingforflight/" >공항에 도착했을 때</a>
                <a href="http://japanguideinfo.com/sa/howtotravel/uponarrival/" >일본에 도착하면</a>
                <a href="http://japanguideinfo.com/sa/howtotravel/commonsense/" >일본의 기초상식</a>
                <a href="http://japanguideinfo.com/sa/howtotravel/train/" >전철 타는법</a>
                <a href="http://japanguideinfo.com/sa/howtotravel/japanrailpass/" >JR패스 이용법</a>
                <a href="http://japanguideinfo.com/sa/howtotravel/bus/" >버스 이용법</a>
                <a href="http://japanguideinfo.com/sa/howtotravel/rentacar/" >렌터카 이용법</a>
                <a href="http://japanguideinfo.com/sa/howtotravel/onsen/" >온천 이용법</a>
                <a href="http://japanguideinfo.com/sa/howtotravel/whenyougetlost/" >길을 잃었을 때</a>
                <a href="http://japanguideinfo.com/sa/howtotravel/basicjapanese/" >기초 일본어</a>
              </div>
            </div>

            
           
            <div class="item last_item">
             
                <div class="bottom_item">
                  <div class="title">
                    <h6>About us</h6>
                   </div>
                   <div class="link">
                    <a href="http://japanguideinfo.com/sa/" >Home</a>
                    <a href="http://japanguideinfo.com/web/" >About Korea Travel Guide Info</a> 
                    <a href="http://japanguideinfo.com/aboutus/" >Company Profile</a> 
                    <a href="http://japanguideinfo.com/advertisement/" ><b>Advertisement & Price list</b></a>
                    <a href="http://japanguideinfo.com/jp/advertisement/" ><b>広告＆料金表</b></a>
                    <a href="https://www.youtube.com/channel/UC0u7mVIpRdNehBanANORptA" target="blank" >YouTube Introduction</a>                  
                    <a href="http://japanguideinfo.com/JTGI/" target="blank" >SNS video streaming</a>                            
                    <a href="http://japanguideinfo.com/termofservice/" >Term of service</a>                  
                    <a href="http://japanguideinfo.com/externalwriter/" >Request to an external writer</a> 
                    <a href="http://japanguideinfo.com/request/" >Request for shooting/editing/advertising</a>  
                    <a href="http://japanguideinfo.com/inquiry/" >Contact us</a>          
                  </div>
                </div>
                <div class="other_ln">
                  <ul>
                    <li><a href="http://japanguideinfo.com/es">1</a></li>
                    <li><a href="http://japanguideinfo.com/fr">2</a></li>
                    <li><a href="http://japanguideinfo.com/id">3</a></li>
                    <li><a href="http://japanguideinfo.com/pt">4</a></li>
                    <li><a href="http://japanguideinfo.com/my">5</a></li>
                    <li><a href="http://japanguideinfo.com/sa">6</a></li>
                    <li><a href="http://japanguideinfo.com/ta">7</a></li>
                    <li><a href="http://japanguideinfo.com/vn">8</a></li>
                  </ul>
                </div>
                
         
                
            </div>
           
           
          </div>
    `
  }
}
customElements.define('sa-footer', SaFooter)

// End SA language Footer Part


//*********************************** VN *********************************** */

// VN language Header Part

class VnHeaderLanguage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="language">
    <div class="dropdown">
      <button disabled type="button" class="btn dropdown-toggle" data-toggle="dropdown">
        Language
      </button>
      <div class="dropdown-menu mega-dropdown-menu">
        <a class="dropdown-item" href="http://japanguideinfo.com/">ENGLISH</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/jp/">日本語</a>
        <a class="dropdown-item"  href="http://japanguideinfo.com/kr/">한국어</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/cn/">中文 (简体)</a>
        <a class="dropdown-item" href="http://japanguideinfo.com/tw/">中文 (繁體)</a>
      </div>
    </div>
  </div>
    `
  }
}
customElements.define('vn-header-language', VnHeaderLanguage)


class VnHeaderLink extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="menu_top">
    <nav class="navbar navbar-expand-lg p-0">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="bi bi-list"></i>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/vn/">HOME </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/vn/trend/">Xu hướng Nhật Bản</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/vn/event/">Lễ hội・ Sự kiện!</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/vn/shock/">Sốc văn hóa !</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/vn/interest/">Văn hóa・ Tour du lịch Nhật Bản trải nghiệm thực tế</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/vn/howtotravel/">Tour du lịch Nhật Bản thông minh</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/vn/map/">Bản đồ thành phố</a>
          </li>

          <div class="menu_border"></div>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/vn/recommend/">Chuyến đi được đề xuất </a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/vn/travelersuggestion/">Chuyến đi được đề xuất cho khách du lịch</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/vn/food/">Văn hóa ẩm thực Nhật Bản</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/vn/city/">Giới thiệu các thành phốchính Nhật Bản</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://japanguideinfo.com/vn/commonsense/">Quy tắc địa phương của Nhật Bản</a>
          </li>
        </ul>
        
      </div>
    </nav>
  </div>
    `
  }
}
customElements.define('vn-header-link', VnHeaderLink)


// End VN language Header Part



// VN language Footer Part

class VnFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer_menu">
            <div class="item">
              <div class="title">
                <h6>Thông tin Hướng dẫn Du lịch Nhật Bản</h6>
               </div>
              <div class="link">
                  <a href="http://japanguideinfo.com/vn/trend/">Xu hướng Nhật Bản</a>
                  <a href="http://japanguideinfo.com/vn/event/">Lễ hội và sự kiện Nhật Bản!</a>
                  <a href="http://japanguideinfo.com/vn/shock/">Sốc văn hóa</a>
                  <a href="http://japanguideinfo.com/vn/interest/">Trải nghiệm văn hóa Nhật Bản, tour tham quan thực tế</a>
                  <a href="http://japanguideinfo.com/vn/howtotravel/">Cách tốt cho du lịch Nhật Bản</a>
                  <a href="http://japanguideinfo.com/vn/recommend/">Tour tham quan được đề xuất </a>
                  <a href="http://japanguideinfo.com/vn/travelersuggestion/">Các chuyến đi được đề xuất cho khách du lịch!</a>
                  <a href="http://japanguideinfo.com/vn/food/">Văn hóa ẩm thực Nhật Bản</a>
                  <a href="http://japanguideinfo.com/vn/commonsense/">Quy tắc địa phương của Nhật Bản</a>
                  <a href="http://japanguideinfo.com/vn/map/">Bản đồ thành phố</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6><a href="http://japanguideinfo.com/vn/city/">Giới thiệu các thành phố và thị trấn lớn</a></h6>
              </div>
              <div class="link">
                <p>
                  <a href="http://japanguideinfo.com/vn/city/Hokkaido/" >Hokkaido / </a>
                  <a href="http://japanguideinfo.com/vn/city/Aomori/" >Aomori / </a>
                  <a href="http://japanguideinfo.com/vn/city/Akita/" >Akita</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/vn/city/sendai/" >Miyagi・sendai / </a>
                  <a href="http://japanguideinfo.com/vn/city/Chiba/" >Chiba</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/vn/city/Tokyo/" >Tokyo / </a>
                  <a href="http://japanguideinfo.com/vn/city/Yokohama/" >Kanagawa・Yokohama</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/vn/city/Niigata/" >Niigata / </a>
                  <a href="http://japanguideinfo.com/vn/city/Nagano/" >Nagano</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/vn/city/Gifu/" >Gifu / </a>
                  <a href="http://japanguideinfo.com/vn/city/Aichi/" >Aichi・Nagoya</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/vn/city/Kyoto/" >Kyoto / </a>
                  <a href="http://japanguideinfo.com/vn/city/Nara/" >Nara</a>
                </p>
                <p>
                  <a href="http://japanguideinfo.com/vn/city/Osaka/" >Osaka / </a>
                  <a href="http://japanguideinfo.com/vn/city/Kobe/" >Hyogo・Kobe</a>
                </p>
                <p> <a href="http://japanguideinfo.com/vn/city/Okayama/" >Okayama / </a>
                    <a href="http://japanguideinfo.com/vn/city/Hiroshima/" >Hiroshima</a>
                </p>
                <a href="http://japanguideinfo.com/vn/city/Shikoku/" >Shikoku (Tokushima / Kagawa / Ehime / Kochi)</a>
          
                <a href="http://japanguideinfo.com/vn/city/Fukuoka/" >Kyushu (Fukuoka / Nagasaki / Kumamoto)</a>
                <a href="http://japanguideinfo.com/vn/city/Okinawa/" >Okinawa</a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6>Các điểm du lịch chính</h6>
              </div>
              <div class="link">
              <br>
              <a href="http://japanguideinfo.com/vn/spots/sightseeing/" >Các điểm du lịch</a>
              <a href="http://japanguideinfo.com/vn/spots/shopping/" >Mua sắm</a>
              <a href="http://japanguideinfo.com/vn/spots/japanesegarden/" >Vườn thượng uyển/ bảo tàng Nhật Bản</a>
              <a href="http://japanguideinfo.com/vn/spots/publicbaths/" >Sento (nhà tắm công cộng)</a>
              <a href="http://japanguideinfo.com/vn/spots/cherryblossomspots/" >Điểm ngắm hoa anh đào</a>
              <a href="http://japanguideinfo.com/vn/spots/beaches/" >Bãi tắm biển gần đó</a>
              <a href="http://japanguideinfo.com/vn/spots/hotspring/" >Suối nước nóng gần đó</a>
              <a href="http://japanguideinfo.com/vn/spots/winterliiuminations/" >Illumination gần đó</a>
              <a href="http://japanguideinfo.com/vn/spots/snow/" >Bãi tuyết gần đó</a>
              <a href="http://japanguideinfo.com/vn/spots/instagrammablespot/" >Các điểm nổi tiếng trên Instagram </a>
              </div>
            </div>

            <div class="item">
              <div class="title">
               <h6> <a href="http://japanguideinfo.com/vn/howtotravel/">Tour du lịch Nhật Bản khôn khéo</a></h6>
              </div>
              <div class="link">
                <a href="http://japanguideinfo.com/vn/howtotravel/BeforeDeparture/" >Chuẩn bị trước khi đến Nhật Bản</a>
                <a href="http://japanguideinfo.com/vn/howtotravel/whilewaitingforflight/" >Khi bạn đến sân bay</a>
                <a href="http://japanguideinfo.com/vn/howtotravel/uponarrival/" >Khi đặt chân đến Nhật Bản</a>
                <a href="http://japanguideinfo.com/vn/howtotravel/commonsense/" >Quy tắc địa phương của Nhật Bản</a>
                <a href="http://japanguideinfo.com/vn/howtotravel/train/" >Làm thế nào để lên tàu</a>
                <a href="http://japanguideinfo.com/vn/howtotravel/japanrailpass/" >Thẻ tàu JR Pass</a>
                <a href="http://japanguideinfo.com/vn/howtotravel/bus/" >Làm thế nào để lên xe buýt</a>
                <a href="http://japanguideinfo.com/vn/howtotravel/rentacar/" >Làm thế nào để thuê xe ô tô</a>
                <a href="http://japanguideinfo.com/vn/howtotravel/onsen/" >Cách vào suối nước nóng</a>
                <a href="http://japanguideinfo.com/vn/howtotravel/whenyougetlost/" >Khi không biết cách để đến đích</a>
                <a href="http://japanguideinfo.com/vn/howtotravel/basicjapanese/" >Cách thể hiện bằng tiếng Nhật được sử dụng cho du lịch</a>
              </div>
            </div>

            
           
            <div class="item last_item">
             
                <div class="bottom_item">
                  <div class="title">
                    <h6>About us</h6>
                   </div>
                   <div class="link">
                   <br>
                    <a href="http://japanguideinfo.com/vn/" >Home</a>
                    <a href="http://japanguideinfo.com/web/" >About Korea Travel Guide Info</a> 
                    <a href="http://japanguideinfo.com/aboutus/" >Company Profile</a> 
                    <a href="http://japanguideinfo.com/advertisement/" ><b>Advertisement & Price list</b></a>
                    <a href="http://japanguideinfo.com/jp/advertisement/" ><b>広告＆料金表</b></a>
                    <a href="https://www.youtube.com/channel/UC0u7mVIpRdNehBanANORptA" target="blank" >YouTube Introduction</a>                  
                    <a href="http://japanguideinfo.com/JTGI/" target="blank" >SNS video streaming</a>                            
                    <a href="http://japanguideinfo.com/termofservice/" >Term of service</a>                  
                    <a href="http://japanguideinfo.com/externalwriter/" >Request to an external writer</a> 
                    <a href="http://japanguideinfo.com/request/" >Request for shooting/editing/advertising</a>  
                    <a href="http://japanguideinfo.com/inquiry/" >Contact us</a>          
                  </div>
                </div>
                <div class="other_ln">
                  <ul>
                    <li><a href="http://japanguideinfo.com/es">1</a></li>
                    <li><a href="http://japanguideinfo.com/fr">2</a></li>
                    <li><a href="http://japanguideinfo.com/id">3</a></li>
                    <li><a href="http://japanguideinfo.com/pt">4</a></li>
                    <li><a href="http://japanguideinfo.com/my">5</a></li>
                    <li><a href="http://japanguideinfo.com/sa">6</a></li>
                    <li><a href="http://japanguideinfo.com/ta">7</a></li>
                    <li><a href="http://japanguideinfo.com/vn">8</a></li>
                  </ul>
                </div>
                
         
                
            </div>
           
           
          </div>
    `
  }
}
customElements.define('vn-footer', VnFooter)

// End VN language Footer Part
