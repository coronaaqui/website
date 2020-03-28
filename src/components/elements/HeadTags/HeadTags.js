import React from 'react';

const HeadTags = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+"=([^&]*)")))?m[1]:null};f&&d(f,"state")&&(j=JSON.parse(decodeURIComponent(d(f,"state"))),"mpeditor"===j.action&&(b.sessionStorage.setItem("_mpcehash",f),history.replaceState(j.desiredHash||"",c.title,k.pathname+k.search)))}catch(n){}var l,h;window.mixpanel=a;a._i=[];a.init=function(b,d,g){function c(b,i){var a=i.split(".");2==a.length&&(b=b[a[0]],i=a[1]);b[i]=function(){b.push([i].concat(Array.prototype.slice.call(arguments,
            0)))}}var e=a;"undefined"!==typeof g?e=a[g]=[]:g="mixpanel";e.people=e.people||[];e.toString=function(b){var a="mixpanel";"mixpanel"!==g&&(a+="."+g);b||(a+=" (stub)");return a};e.people.toString=function(){return e.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
            for(h=0;h<l.length;h++)c(e,l[h]);var f="set set_once union unset remove delete".split(" ");e.get_group=function(){function a(c){b[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));e.push([d,call2])}}for(var b={},d=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<f.length;c++)a(f[c]);return b};a._i.push([b,d,g])};a.__SV=1.2;b=c.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
            MIXPANEL_CUSTOM_LIB_URL:"file:"===c.location.protocol&&"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js";d=c.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d)}})(document,window.mixpanel||[]);
            mixpanel.init("055f6e5b7a7f34e9b9997bab4517b6fa")
          `
        }}
      />
      {/* <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=UA-162087851-1'
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-162087851-1');
          `
        }}
      /> */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:1746514,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          gtag('config', 'UA-162087851-1');
          `
        }}
      />

      <meta
        name='title'
        content='Corona Brasil - Saiba o que está funcionando em sua cidade'
      />
      <meta
        name='description'
        content='Portal que reúne informações públicas essenciais que os cidadãos precisam para realizar atividades cotidianas. '
      />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://coronabrasil.org/' />
      <meta
        property='og:title'
        content='Corona Brasil - Saiba o que está funcionando em sua cidade'
      />
      <meta
        property='og:description'
        content='Portal que reúne informações públicas essenciais que os cidadãos precisam para realizar atividades cotidianas. '
      />
      <meta property='og:image' content='/static/banner.png' />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://coronabrasil.org/' />
      <meta
        property='twitter:title'
        content='Corona Brasil - Saiba o que está funcionando em sua cidade'
      />
      <meta
        property='twitter:description'
        content='Portal que reúne informações públicas essenciais que os cidadãos precisam para realizar atividades cotidianas. '
      />
      <meta property='twitter:image' content='/static/banner.png' />
    </>
  );
};

export default HeadTags;
