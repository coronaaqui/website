import React from 'react';

const HeadTags = () => {
  return (
    <>
      <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          var OneSignal = window.OneSignal || [];
          OneSignal.push(function() {
            OneSignal.init({
              appId: "0b7d8d71-0adf-4346-967b-48e3393c3c79",
            });
          });
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
