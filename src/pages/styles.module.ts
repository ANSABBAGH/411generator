const main = {
  '@import url("fonts/fonts.css")': true,
  '@import url("rez.css")': true,
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, sub, sup, tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td": {
    margin: "0",
    padding: "0",
    border: "0",
    outline: "0",
    fontWeight: "inherit",
    fontStyle: "inherit",
    fontFamily: "inherit",
    verticalAlign: "baseline"
  },
  ":focus, :active": { outline: "0" },
  "a img": { border: "none" },
  img: { verticalAlign: "bottom" },
  "p.spacer": {
    clear: "both",
    height: "0em !important",
    padding: "0em !important",
    margin: "0em !important"
  },
  "a, a:visited": { color: "#FFF", textDecoration: "underline" },
  "a:hover": { textDecoration: "none" },
  li: { listStyle: "none" },
  'input[type="text"],  input[type="tel"],  input[type="email"], input[type="checkbox"], input[type="select"], input[type="radio"], input[type="button"], input[type="submit"], textarea, select': {
    WebkitAppearance: "none",
    MozAppearance: "none",
    msAppearance: "none",
    OAppearance: "none",
    appearance: "none"
  },
  textarea: {
    resize: "none",
    height: "9.54em",
    overflow: "auto",
    width: "100%"
  },
  "#modalbox": {
    width: "100%",
    height: "100%",
    paddingTop: "5em",
    background: "rgba(255,255,255,0.90)",
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: 999,
    display: "none",
    overflow: "hidden",
    WebkitOverflowScrolling: "touch",
    outline: "0"
  },
  "#modalbox .choix1, #modalbox .choix2": {
    cssFloat: "left",
    width: "50%",
    margin: "3em 0"
  },
  "#modalbox .choix1": {
    display: "inline-block",
    width: "49%",
    borderRight: "1px solid #999"
  },
  "#modalbox .choix": {
    display: "inline-block",
    width: "100%",
    margin: "auto",
    background: "#f1f1f1",
    verticalAlign: "text-top",
    MozBorderBottomLeftRadius: "0.5em",
    WebkitBorderBottomLeftRadius: "0.5em",
    borderBottomLeftRadius: "0.5em",
    MozBorderBottomRightRadius: "0.5em",
    WebkitBorderBottomRightRadius: "0.5em",
    borderBottomRightRadius: "0.5em"
  },
  "#modalbox p": { fontSize: "1.15em", padding: "1em 4em 0 4em" },
  "#modalbox .btn_std": { marginTop: "1em" },
  "#modalbox .popup": { position: "relative" },
  "#modalbox .mdbox": { display: "block", verticalAlign: "top" },
  "#modalbox .mdcontent": {
    display: "inline-block",
    width: "100%",
    textAlign: "left",
    color: "#666",
    outline: "0"
  },
  "#modalbox .mdcontent h4": {
    fontSize: "1em",
    padding: "0.75em",
    borderBottom: "1px solid #e5e5e5",
    color: "#fff",
    background: "#0DA2F2",
    MozBorderTopLeftRadius: "0.5em",
    WebkitBorderTopLeftRadius: "0.5em",
    borderTopLeftRadius: "0.5em",
    MozBorderTopRightRadius: "0.5em",
    WebkitBorderTopRightRadius: "0.5em",
    borderTopRightRadius: "0.5em",
    margin: "0"
  },
  ".modalw": { width: "65%", margin: "auto" },
  ".modalbox": {
    width: "100%",
    height: "100%",
    paddingTop: "5em",
    background: "rgba(255,255,255,0.90)",
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: 999,
    display: "none",
    overflow: "hidden",
    WebkitOverflowScrolling: "touch",
    outline: "0"
  },
  ".modalbox .choix1, .modalbox .choix2": {
    cssFloat: "left",
    width: "50%",
    margin: "3em 0"
  },
  ".modalbox .choix1": {
    display: "inline-block",
    width: "49%",
    borderRight: "1px solid #999"
  },
  ".modalbox .choixunique": { padding: "80px 80px 20px 80px" },
  ".modalbox .choix": {
    display: "inline-block",
    width: "100%",
    margin: "auto",
    background: "#f1f1f1",
    verticalAlign: "text-top",
    MozBorderBottomLeftRadius: "0.5em",
    WebkitBorderBottomLeftRadius: "0.5em",
    borderBottomLeftRadius: "0.5em",
    MozBorderBottomRightRadius: "0.5em",
    WebkitBorderBottomRightRadius: "0.5em",
    borderBottomRightRadius: "0.5em"
  },
  ".modalbox p": { fontSize: "1.15em", padding: "1em 4em 0 4em" },
  ".modalbox .btn_std": { marginTop: "1em" },
  ".modalbox .popup": { position: "relative" },
  ".modalbox .mdbox": { display: "block", verticalAlign: "top" },
  ".modalbox .mdcontent": {
    display: "inline-block",
    width: "100%",
    textAlign: "left",
    color: "#666",
    outline: "0"
  },
  ".modalbox .mdcontent h4": {
    fontSize: "1em",
    padding: "0.75em",
    borderBottom: "1px solid #e5e5e5",
    color: "#fff",
    background: "#1B2229",
    MozBorderTopLeftRadius: "0.5em",
    WebkitBorderTopLeftRadius: "0.5em",
    borderTopLeftRadius: "0.5em",
    MozBorderTopRightRadius: "0.5em",
    WebkitBorderTopRightRadius: "0.5em",
    borderTopRightRadius: "0.5em",
    margin: "0"
  },
  'a.btn_std, button, .btn_tel_float, a.btn_tel, a.btn_adhesion, input[type="button"], input[type="submit"], input[type="text"],  input[type="tel"],  input[type="email"], textarea, .boite_msg_contact, .selectRegion select, .selectmRegion select, .regions_menu a, .shareicons.fb a, .shareicons.instagram a, .shareicons.www a, .pregions_icon.rdv a, .pregions_icon.info a, .pregions_icon.www a, .pregions_icon.map a, .box_contact .rep a.emailrep, a.btn_eml, #form_adhesion_reseau textarea, .pclient .left .equipe_info li, .pclient .right .equipe_info li, .boxpromo': {
    WebkitTransition: "all 250ms ease-out",
    MozTransition: "all 250ms ease-out",
    msTransition: "all 250ms ease-out",
    OTransition: "all 250ms ease-out",
    transition: "all 250ms ease-out"
  },
  'a.btn_std, button, .btn_tel_float, a.btn_tel, a.btn_adhesion, input[type="button"], input[type="submit"], input[type="text"],  input[type="tel"],  input[type="email"], textarea, .boite_msg_contact, .shareicons a, .pregions .toggle_regions a, .pregions .toggle_regions .cache_texte .btn_ouvrir, .pregions_icon.rdv a, .pregions_icon.info a, .pregions_icon.www a, .pregions_icon.map a, .pregions_icon.rdv2, .pregions_icon.info2, .pregions_icon.www2, .pregions_icon.map2, .box_contact .rep a.emailrep, a.btn_eml, #boxprix .rabais, #boxprix2 .rabais, #form_adhesion_reseau .code_verif img, #form_adhesion_reseau .term_cond, #form_adhesion_reseau .ico_client, .pclient .left .equipe_info li, .pclient .right .equipe_info li, #form_adhesion_reseau .logos_pro label, .modepaiement.box, #form_adhesion_reseau .bg_blanc.box, #form_adhesion_reseau label.note, .google_logos': {
    MozBorderRadius: "0.25em",
    WebkitBorderRadius: "0.25em",
    borderRadius: "0.25em"
  },
  body: {
    fontFamily: "'font_light', Arial, Helvetica, sans-serif",
    fontSize: "1em",
    margin: "0",
    background: "#fff",
    color: "#455560"
  },
  ".mwidth": { width: "80%", margin: "auto" },
  ".logo": {
    position: "fixed",
    left: "21%",
    top: "0.9em",
    textTransform: "uppercase",
    zIndex: 999,
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif"
  },
  ".logo a": {
    textDecoration: "none",
    textShadow: "0px 0px 1px rgba(1,2,2,0.95)",
    letterSpacing: "0.02em"
  },
  ".logo .comptable": { color: "#6BCBFF" },
  ".logo .com": { fontSize: "0.5em", color: "#FFF" },
  sup: { fontSize: "0.75em", verticalAlign: "text-top" },
  ".ancre": { marginTop: "-4em", cssFloat: "left" },
  ".maj": { textTransform: "uppercase" },
  "b, .b": { fontFamily: "'font_black', Arial, Helvetica, sans-serif" },
  "b2, .b2": { fontFamily: "'font2_black', Arial, Helvetica, sans-serif" },
  "u, .u": { textDecoration: "underline" },
  "strong, .strong": {
    fontFamily: "'font_black', Arial, Helvetica, sans-serif"
  },
  ".justify": { textAlign: "justify" },
  ".ancretop": { marginTop: "-3em", cssFloat: "left" },
  ".ancreclient": { marginTop: "-3em", cssFloat: "left" },
  ".menu_pad": { display: "block", height: "0.01em" },
  ".text_shadow": { textShadow: "0 0 0.15em rgba(40,40,40,0.75)" },
  ".box_shadow": { boxShadow: "0 0 2em rgba(0,0,0,0.25)" },
  ".font_light": { fontFamily: "'font_light', Arial, Helvetica, sans-serif" },
  ".font_bold": { fontFamily: "'font_bold', Arial, Helvetica, sans-serif" },
  ".font_black": { fontFamily: "'font_black', Arial, Helvetica, sans-serif" },
  ".font2_light": { fontFamily: "'font2_light', Arial, Helvetica, sans-serif" },
  ".font2_reg": { fontFamily: "'font2_reg', Arial, Helvetica, sans-serif" },
  ".font2_bold": { fontFamily: "'font2_bold', Arial, Helvetica, sans-serif" },
  ".font2_black": { fontFamily: "'font2_black', Arial, Helvetica, sans-serif" },
  ".font_blackita": {
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif"
  },
  ".italic": {
    msTransform: "skew(-8deg,0deg)",
    WebkitTransform: "skew(-8deg,0deg)",
    transform: "skew(-8deg,0deg)"
  },
  h1: { fontSize: "2em", letterSpacing: "-0.01em", margin: "0 0 0.25em 0" },
  h2: { fontSize: "2em", letterSpacing: "-0.01em", margin: "0 0 0.25em 0" },
  h3: { fontSize: "1.25em", letterSpacing: "-0.01em", margin: "0 0 0.25em 0" },
  h4: { fontSize: "0.8em", lineHeight: "1.2em", margin: "0 0 0.25em 0" },
  p: { fontSize: "1em", lineHeight: "1.2em", margin: "0 0 1em 0" },
  ".bg": {
    width: "100%",
    height: "39.5em",
    background: "url(../img/411sante.jpg) no-repeat top center fixed",
    backgroundSize: "100% auto"
  },
  ".selectRegion": {
    position: "fixed",
    right: "15.75%",
    top: "0.7em",
    zIndex: 999
  },
  ".selectRegion select": {
    background: "transparent",
    border: "none",
    padding: "0em",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    cursor: "pointer"
  },
  ".selectRegion.slate": {
    background: "#0E7AB9",
    width: "10em",
    MozBorderRadius: "0.25em",
    WebkitBorderRadius: "0.25em",
    borderRadius: "0.25em",
    textAlign: "center"
  },
  ".selectRegion.slate select": {
    fontSize: "0.75em",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    color: "#FFF",
    height: "1.75em",
    width: "12.75em",
    padding: "0.1em 0 0.1em 0.25em",
    background: "#0E7AB9 url(../img/ico-map.svg) no-repeat",
    backgroundPosition: "11.2em 0.2em",
    backgroundSize: "1.45em",
    margin: "0.25em 0"
  },
  ".selectmRegion": { display: "none" },
  ".selectmRegion  p": { padding: "0", marginBottom: "1em" },
  ".selectmRegion select": {
    background: "transparent",
    border: "none",
    padding: "0em",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    cursor: "pointer"
  },
  ".selectmRegion.slate": {
    background: "#FFF",
    width: "80%",
    margin: "auto",
    padding: "0 0 0 0.25em",
    MozBorderRadius: "0.3em",
    WebkitBorderRadius: "0.3em",
    borderRadius: "0.3em",
    textAlign: "center"
  },
  ".selectmRegion.slate select": {
    fontSize: "1em",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    color: "#748794",
    width: "100%",
    padding: "0 0.25em 0 0.25em",
    height: "auto",
    background: "#FFF url(../img/ico-selectmRegion.svg) no-repeat",
    backgroundPosition: "98% 0.07em",
    backgroundSize: "1em",
    margin: "0.25em 0"
  },
  ".logopng": {
    textAlign: "center",
    padding: "12.25em 0 0 0",
    width: "75%",
    marginLeft: "12.5%",
    position: "absolute",
    zIndex: 5
  },
  ".logopng img": { width: "100%", height: "auto" },
  ".fadeImg": {
    width: "100%",
    height: "39em",
    position: "relative",
    display: "block",
    zIndex: -1
  },
  ".fadeImgPos": {
    width: "100%",
    height: "auto",
    position: "fixed",
    display: "block"
  },
  ".bgcontent": {
    background: "#FFF",
    display: "inline-block",
    marginBottom: "-0.25em"
  },
  ".rpcq": {
    padding: "1em 0 0.85em 0",
    background: "#0DA2F2",
    color: "rgba(255,255,255,0.7)",
    textAlign: "center"
  },
  ".rpcq h1": {
    fontSize: "1.3em",
    lineHeight: "1.3em",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    padding: "0 1em"
  },
  ".rpcq h1 a": { color: "rgba(255,255,255,0.7)", textDecoration: "none" },
  ".links": {
    backgroundColor: "#0DA2F2",
    padding: "4.25em 0 1.5em 0",
    color: "rgba(255,255,255,0.8)",
    textTransform: "uppercase",
    fontSize: "0.5em",
    lineHeight: "1.4em",
    textAlign: "justify",
    fontFamily: "'font_light', Arial, Helvetica, sans-serif"
  },
  ".links a": { textDecoration: "none", color: "rgba(255,255,255,0.8)" },
  ".links a:hover": { textDecoration: "underline", color: "#FFF" },
  ".extreme": { cssFloat: "left", margin: "3em 0 0 3em" },
  'a.btn_std, .btn_tel_float, a.btn_tel, a.btn_eml, a.btn_adhesion, input[type="button"], input[type="submit"], button': {
    fontSize: "0.65em",
    padding: "0.5em 1.5em 0.5em 1.5em",
    display: "block",
    textTransform: "uppercase",
    background: "#0E7AB9",
    color: "#FFFFFF",
    textDecoration: "none",
    backgroundSize: "1.5em",
    fontFamily: "'font_black', sans-serif, Arial",
    margin: "0.3em 0.5em 0.3em 0",
    textAlign: "center",
    border: "none",
    width: "auto",
    cursor: "pointer",
    letterSpacing: "0.05em",
    MozBorderRadius: "0.45em",
    WebkitBorderRadius: "0.45em",
    borderRadius: "0.45em"
  },
  'input[type="button"], input[type="submit"]': { width: "104.5%" },
  "a.btn_tel": {
    display: "inline-block",
    width: "7em",
    fontSize: "1.25em",
    background: "#0E7AB9 url(../img/ico-tel.svg) no-repeat 0.2em center",
    padding: "0.3em 0em 0.25em 1.7em",
    textAlign: "left",
    letterSpacing: "-0.03em",
    margin: "0 0 0.25em 0",
    backgroundSize: "1.4em"
  },
  ".btn_tel_float": {
    fontSize: "1em",
    width: "22.25em",
    position: "fixed",
    right: "0",
    bottom: "1.5em",
    color: "#FFFFFF",
    padding: "0.5em",
    textAlign: "left",
    MozBorderRadius: "0.5em",
    WebkitBorderRadius: "0.5em",
    borderRadius: "0.5em",
    MozBorderRadiusTopright: "0",
    borderTopRightRadius: "0",
    MozBorderRadiusBottomright: "0",
    borderBottomRightRadius: "0",
    zIndex: 999,
    margin: "0",
    display: "block"
  },
  ".btn_tel_float a": { display: "block", textDecoration: "none" },
  ".btn_tel_float .tel_float a": {
    paddingLeft: "1.15em",
    marginRight: "-0.2em",
    fontSize: "2.85em",
    whiteSpace: "nowrap",
    background: "url(../img/ico-tel.svg) no-repeat -0.03em -0.1em",
    backgroundSize: "1.1em",
    marginTop: "-0.1em",
    marginBottom: "-0.07em",
    letterSpacing: "-0.02em"
  },
  ".btn_tel_float .url_float a": {
    display: "inline",
    padding: "0",
    margin: "0",
    whiteSpace: "nowrap"
  },
  ".btn_tel_float p": { display: "inline-block", padding: "0", margin: "0" },
  ".btn_tel_float .tel_float p": {
    fontSize: "0.75em",
    paddingLeft: "4.5em",
    letterSpacing: "0.1em"
  },
  ".btn_tel_float .url_float p, .btn_tel_float .url_float2 p, .btn_tel_float .url_float3 p": {
    fontSize: "0.65em",
    display: "inline",
    margin: "0",
    padding: "0 0 0 0.75em",
    whiteSpace: "nowrap",
    letterSpacing: "0.05em"
  },
  ".btn_tel_float .url_float p a": {
    fontSize: "1.8em",
    display: "inline",
    margin: "0",
    whiteSpace: "nowrap"
  },
  ".btn_tel_float .url_float2 p a": {
    fontSize: "1.55em",
    display: "inline",
    margin: "0",
    whiteSpace: "nowrap"
  },
  ".btn_tel_float .url_float3 p a": {
    fontSize: "1.25em",
    display: "inline",
    margin: "0",
    whiteSpace: "nowrap"
  },
  ".btn_tel_float:hover": { width: "23.5em" },
  ".btn_tel_float .url_float p a:hover, .btn_tel_float .url_float2 p a:hover, .btn_tel_float .url_float3 p a:hover": {
    textDecoration: "underline"
  },
  'a.btn_std:hover, .btn_tel_float:hover, a.btn_tel:hover, a.btn_eml:hover, input[type="button"]:hover, input[type="submit"]:hover': {
    backgroundColor: "#000000",
    color: "#FFF"
  },
  "a.btn_adhesion": {
    fontSize: "1.25em",
    display: "block",
    width: "9.25em",
    margin: "auto",
    textTransform: "uppercase",
    background: "#0E7AB9 url(../img/ico-btn-adhesion.svg) no-repeat 98% center",
    backgroundSize: "2em",
    padding: "0.4em 1.5em 0.5em 0.5em",
    textAlign: "left",
    letterSpacing: "-0.01em"
  },
  "a.btn_adhesion:hover": {
    background: "#000 url(../img/ico-btn-adhesion.svg) no-repeat 98% center",
    backgroundSize: "2em"
  },
  "a.btn_adhesion span": { fontSize: "0.8em" },
  'input[type="button"].btn_envoyer, input[type="submit"].btn_envoyer': {
    width: "12em",
    margin: "auto",
    fontSize: "0.75em"
  },
  'input[type="button"].btn_envoyer:hover, input[type="submit"].btn_envoyer:hover': {
    color: "#FFF"
  },
  ".selRegion": { position: "relative", marginBottom: "2em", display: "block" },
  ".selRegion select": {
    background: "transparent",
    border: "none",
    padding: "0em",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    cursor: "pointer"
  },
  ".selRegion.slate": {
    background: "#0E7AB9",
    width: "10em",
    MozBorderRadius: "0.25em",
    WebkitBorderRadius: "0.25em",
    borderRadius: "0.25em",
    textAlign: "center"
  },
  ".selRegion.slate select": {
    fontSize: "0.75em",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    color: "#FFF",
    width: "12.5em",
    padding: "0.1em 0",
    height: "1.75em",
    background: "#0E7AB9 url(../img/ico-map.svg) no-repeat",
    backgroundPosition: "11.2em 0.2em",
    backgroundSize: "1.45em",
    margin: "0.25em 0"
  },
  ".dashedbdr": {
    border: "1px dashed #A1B2BE",
    width: "auto",
    display: "inline-block",
    padding: "0.5em",
    MozBorderRadius: "0.6em",
    WebkitBorderRadius: "0.6em",
    borderRadius: "0.6em"
  },
  ".col1": { cssFloat: "left", width: "25%" },
  ".col2": { cssFloat: "left", width: "50%" },
  ".col3": { cssFloat: "left", width: "25%" },
  ".row": {
    width: "99.9%",
    display: "flex",
    flexWrap: "wrap",
    padding: "0 0 3em 0",
    verticalAlign: "top"
  },
  ".column": { flex: "25%", maxWidth: "25%", verticalAlign: "top" },
  ".right .column": { flex: "100%", maxWidth: "100%", padding: "0" },
  ".column img": { margin: "0", width: "100%" },
  ".right .column img": { margin: "0", width: "100%" },
  ".column  p": { textAlign: "center !important", marginTop: "0.9em" },
  ".col1.regions": {
    background: "#0E7AB9 url(../img/ico-map.svg) no-repeat",
    backgroundSize: "7em",
    backgroundPosition: "right 3.75em"
  },
  ".box_regions": {
    color: "rgba(255,255,255,0.7)",
    padding: "2.5em 6em 1.15em 2.5em",
    fontFamily: "'font2_light', sans-serif, Arial"
  },
  ".regions h1": { fontSize: "1.25em", paddingRight: "1.5em" },
  ".regions h2": {
    fontSize: "1.25em",
    fontFamily: "'font_blackita', sans-serif, Arial"
  },
  ".regions img": { width: "1em", height: "auto", margin: "0 0 0.15em 2em" },
  ".regions_menu": { background: "#FFF", padding: "2em 0 2em 0" },
  ".regions_menu a": {
    display: "block",
    color: "#748794",
    background: "url(../img/ico-fleche2.svg) no-repeat",
    backgroundPosition: "-1em 0.5em",
    backgroundSize: "1em",
    textDecoration: "none",
    padding: "0.75em 3.75em",
    fontSize: "0.75em",
    fontFamily: "'font_blackita', sans-serif, Arial"
  },
  ".regions_menu a:hover": {
    color: "rgba(255,255,255,1)",
    padding: "0.75em 3.75em",
    fontSize: "0.75em",
    background: "#0E7AB9 url(../img/ico-fleche2.svg) no-repeat",
    backgroundSize: "1em",
    backgroundPosition: "2em center"
  },
  ".client": {
    padding: "4em 3em 3em 3em",
    border: "1px solid #E3ECF3",
    borderTop: "none",
    margin: "0 0 2em 0",
    textAlign: "center"
  },
  ".banniere_xtra": { width: "100%", paddingBottom: "2em" },
  ".banniere_xtra img": { width: "100%", height: "auto", marginBottom: "1em" },
  ".client li": {
    cssFloat: "left",
    width: "50%",
    padding: "0",
    height: "4.3em",
    display: "block"
  },
  ".client li a": { padding: "0 0.75em 0 0.75em", display: "block" },
  ".client li a img": { width: "100%", height: "auto" },
  ".nouv_insc": {
    padding: "4em 1.5em 3em 1.5em",
    textAlign: "center",
    margin: "0 0 2em 0"
  },
  ".nouv_insc h2": {
    margin: "0 0 2em 0",
    textTransform: "uppercase",
    fontSize: "0.75em",
    letterSpacing: "0.2em",
    fontFamily: "'font_black', sans-serif, Arial"
  },
  ".nouv_insc p": {
    margin: "0.25em 0",
    fontSize: "0.6em",
    lineHeight: "1.1em",
    display: "block",
    textAlign: "center",
    height: "2.2em",
    overflow: "hidden"
  },
  ".nouv_insc  p.exclusif": { fontSize: "0.9em", lineHeight: "1.1em" },
  ".nouv_insc span": {
    display: "block",
    textTransform: "uppercase",
    color: "#748794",
    fontSize: "0.5em",
    fontFamily: "'font_black', sans-serif, Arial",
    margin: "0.15em 0 0.5em 0",
    height: "1.2em",
    overflow: "hidden"
  },
  ".nouv_insc a:hover": { color: "#0DA2F2" },
  ".nouv_insc img": { width: "100%", height: "auto" },
  ".nouv_insc ul": { fontFamily: "'font_bold', sans-serif, Arial" },
  ".nouv_insc li": {
    cssFloat: "left",
    width: "50%",
    padding: "0",
    display: "block"
  },
  ".nouv_insc li a": {
    display: "block",
    padding: "0 0.25em 0 0.25em",
    color: "#748794",
    textDecoration: "none"
  },
  ".nouv_insc li a img": { width: "100%", height: "auto" },
  ".icoexclusif, .icoexclusif2": {
    position: "absolute",
    fontSize: "0.6em",
    lineHeight: "1em",
    letterSpacing: "0.05em",
    display: "block",
    textTransform: "uppercase",
    color: "#FFF",
    padding: "0.5em 0.85em 0.5em 0.75em",
    marginTop: "4.75em",
    marginLeft: "-0.25em",
    background: 'url("../img/ico-exclusif.svg") no-repeat left center',
    backgroundSize: "100% auto",
    fontFamily: "'font_black', sans-serif, Arial"
  },
  ".icoexclusif2": { marginTop: "5em" },
  ".btnexclusif": {
    cssFloat: "right",
    fontSize: "1em",
    lineHeight: "1em",
    letterSpacing: "0.05em",
    width: "6em",
    textTransform: "uppercase",
    color: "#FFF",
    padding: "0.5em 0.5em 0.5em 0.75em",
    marginBottom: "0.25em",
    background: 'url("../img/ico-exclusif.svg") no-repeat left center',
    backgroundSize: "100% auto",
    fontFamily: "'font_black', sans-serif, Arial",
    textDecoration: "none",
    MozBorderTopLeftRadius: "0.5em",
    MozBorderBottomLeftRadius: "0.5em",
    WebkitBorderTopLeftRadius: "0.5em",
    WebkitBorderBottomLeftRadius: "0.5em",
    borderTopLeftRadius: "0.5em",
    borderBottomLeftRadius: "0.5em"
  },
  ".box_coor ul": {
    width: "auto",
    padding: "2em",
    background: "#F7F9FB",
    borderBottom: "1px solid #E3ECF3",
    MozBorderRadius: "0em",
    WebkitBorderRadius: "0em",
    borderRadius: "0em",
    borderLeft: "1px solid #E3ECF3"
  },
  ".box_coor h2": { padding: "0" },
  ".box_coor li": {
    margin: "0",
    padding: "0",
    fontFamily: "'font_black', sans-serif, Arial"
  },
  ".box_coor li p": {
    color: "#748794",
    fontSize: "0.75em",
    textTransform: "uppercase",
    letterSpacing: "0.25em",
    padding: "0",
    margin: "0"
  },
  ".box_contact": { cssFloat: "left", width: "75%" },
  ".box_contact .pad": { padding: "6em 3em 2em 3em" },
  ".box_contact .contact": {
    borderLeft: "1px solid #E3ECF3",
    borderBottom: "1px solid #E3ECF3",
    textAlign: "center",
    fontFamily: "'font_black', Arial, Helvetica, sans-serif"
  },
  ".box_contact .contact h1": {
    fontSize: "1.5em",
    textAlign: "center",
    textTransform: "uppercase",
    padding: "2em 0",
    letterSpacing: "0.25em"
  },
  ".box_contact .contact h3": {
    fontSize: "0.85em",
    margin: "2em 0",
    fontFamily: "'font_black', Arial, Helvetica, sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.25em"
  },
  ".box_contact .contact h4": {
    fontSize: "0.85em",
    margin: "1em 0",
    fontFamily: "'font_black', Arial, Helvetica, sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.25em"
  },
  ".box_contact .contact img": { width: "14em", height: "auto" },
  ".box_contact p.add411media": {
    fontSize: "0.8em",
    textTransform: "uppercase",
    letterSpacing: "0.2em"
  },
  ".box_contact p.neq": { fontSize: "0.75em", margin: "0.5em 0 2em 0" },
  ".box_contact .contact_logo": {
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    textAlign: "center",
    fontSize: "3em",
    lineHeight: "0.5em",
    color: "#000",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif"
  },
  ".box_contact .contact_logo a": { textDecoration: "none" },
  ".box_contact .contact_logo .comptable": { color: "#6BCBFF" },
  ".box_contact .contact_logo .com": { fontSize: "0.5em", color: "#000" },
  ".mwidth2": { width: "90%", margin: "auto" },
  ".box_contact .serv_client": {
    width: "100%",
    borderTop: "1px solid #E3ECF3"
  },
  ".box_contact .serv_client .box2": {
    borderLeft: "1px solid #E3ECF3",
    cssFloat: "left",
    paddingBottom: "2em",
    width: "99.8%"
  },
  ".box_contact .serv_client .btn_tel, .box_contact .serv_client .btn_eml": {
    width: "7.75em",
    MozBorderRadius: "0.25em",
    WebkitBorderRadius: "0.25em",
    borderRadius: "0.25em"
  },
  ".box_contact .serv_client ul": {
    fontFamily: "'font_light', Arial, Helvetica, sans-serif"
  },
  ".box_contact .serv_client li": {
    display: "inline-block",
    verticalAlign: "text-top",
    width: "25%",
    height: "28em",
    fontFamily: "'font_light', Arial, Helvetica, sans-serif",
    margin: "1em -0.2em 0 0"
  },
  ".box_contact .serv_client h1": {
    fontSize: "2em",
    margin: "0",
    textAlign: "center",
    padding: "2em 0 0.5em 0",
    fontFamily: "'font_bold', Arial, Helvetica, sans-serif"
  },
  ".box_contact .serv_client h2": { fontSize: "1.4em", margin: "0 0 0.2em 0" },
  ".box_contact .serv_client h3": {
    fontSize: "0.8em",
    fontFamily: "'font_bold', Arial, Helvetica, sans-serif",
    textTransform: "uppercase"
  },
  ".box_contact .serv_client .photo": {
    width: "10.75em",
    height: "auto",
    margin: "0 0 0.75em 0",
    border: "0.5em solid #F1F5F9"
  },
  ".box_contact .serv_client .photo img": { width: "100%", height: "auto" },
  ".box_contact .serv_client p": {
    fontSize: "0.7em",
    margin: "0.2em 0 0.2em 0",
    fontFamily: "'font_bold', Arial, Helvetica, sans-serif",
    textTransform: "uppercase"
  },
  ".box_contact .serv_client a.btn_eml span": {
    fontSize: "0.5em",
    fontFamily: "'font_bold', Arial, Helvetica, sans-serif",
    display: "inline-block",
    top: "-0.25em",
    position: "relative"
  },
  "a.btn_eml": {
    display: "inline-block",
    fontSize: "1.25em",
    background: "#0E7AB9 url(../img/ico-contact.svg) no-repeat 0.1em center",
    padding: "0.1em 0.35em 0.3em 1.3em",
    textAlign: "left",
    letterSpacing: "-0.03em",
    margin: "0 0 0.25em 0",
    backgroundSize: "1.25em"
  },
  "a.btn_eml:hover": {
    background: "#000 url(../img/ico-contact.svg) no-repeat 0.1em center",
    backgroundSize: "1.25em"
  },
  ".col_50": { cssFloat: "left", width: "50%" },
  ".col_33": { cssFloat: "left", width: "33.333%" },
  ".col_left_form": { marginRight: "1.6em", padding: "0 0em 0 0" },
  ".col_right_form": { marginRight: "0.8em", padding: "0 0 0 1em" },
  'input[type="text"],  input[type="tel"],  input[type="email"], textarea': {
    fontFamily: "'font_bold', sans-serif, Arial",
    fontSize: "1em",
    padding: "0.4em",
    color: "#455560",
    marginBottom: "1em",
    display: "block",
    width: "100%",
    border: "none",
    background: "#FFF"
  },
  'input[type="text"]:hover,  input[type="tel"]:hover,  input[type="email"]:hover, textarea:hover': {
    background: "#0DA2F2",
    color: "#455560"
  },
  'input[type="text"]:focus,  input[type="tel"]:focus,  input[type="email"]:focus, textarea:focus': {
    background: "#0DA2F2",
    color: "#455560"
  },
  "#form_contact": {
    width: "100%",
    cssFloat: "left",
    background: "#F1F5F9",
    borderTop: "1px solid #E3ECF3"
  },
  '#form_contact input[type="button"], #form_contact input[type="submit"]': {
    width: "auto",
    margin: "auto",
    padding: "0.75em 1.25em",
    fontSize: "0.85em"
  },
  "#form_contact .box1": {
    padding: "4em 0",
    width: "auto",
    borderLeft: "1px solid #E3ECF3"
  },
  "#form_adhesion": {
    width: "75%",
    cssFloat: "right",
    background: "#F1F5F9",
    borderTop: "1px solid #E3ECF3"
  },
  ".required": {
    marginBottom: "1em",
    color: "#DC2C30",
    textTransform: "uppercase",
    fontSize: "0.6em",
    lineHeight: "0.5em",
    fontFamily: "'font_black', Arial, Helvetica, sans-serif"
  },
  "#form_adhesion .box1": { padding: "4em 0", width: "50%", margin: "auto" },
  ".col_form": { paddingRight: "0.8em" },
  ".bg_adhesion": {
    cssFloat: "left",
    width: "100%",
    background:
      "#0E7AB9 url(../img/ico-left-adhesion.svg) no-repeat 3.35em 5.5em",
    backgroundSize: "15em 15em"
  },
  "#form_contact h2, #form_adhesion h2, #form_adhesion_reseau h2": {
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    fontSize: "2em"
  },
  "#form_contact p, #form_adhesion p, #form_adhesion_reseau p": {
    margin: "0 0 0.5em 0",
    fontFamily: "'font_bold', Arial, Helvetica, sans-serif",
    fontSize: "0.75em",
    textTransform: "uppercase",
    color: "#748794",
    letterSpacing: "0.05em"
  },
  ".boite_msg_contact": {
    display: "none",
    fontFamily: "'font_bold', Arial, Helvetica, sans-serif",
    textAlign: "center",
    width: "70%",
    padding: "0.6em 10% 0.6em 10%",
    margin: "auto",
    marginBottom: "1em",
    fontSize: "0.75em"
  },
  ".boite_msg_contact.erreur": { background: "rgba(255,0,0,1)", color: "#FFF" },
  ".boite_msg_contact.traitement": {
    background: "rgba(150,150,150,1)",
    color: "#FFF",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif"
  },
  ".boite_msg_contact.succes": {
    background: "rgba(140,207,116)",
    color: "#FFF"
  },
  "input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1.5em #FFF inset",
    WebkitTextFillColor: "#455560"
  },
  "input:-webkit-autofill:focus": {
    WebkitBoxShadow: "0 0 0 1.5em #FFF inset",
    WebkitTextFillColor: "#455560"
  },
  ".champobl": {
    fontSize: "0.55em",
    textTransform: "uppercase",
    fontFamily: "'font_black', Arial, Helvetica, sans-serif",
    color: "#748794",
    margin: "0 0 1em 0"
  },
  ".required.asterisk": {
    fontSize: "1.2em",
    lineHeight: "1em",
    verticalAlign: "text-top"
  },
  ".attention": {
    background: "#F00",
    color: "#FFF",
    textTransform: "uppercase",
    padding: "2em",
    textAlign: "center"
  },
  ".attention h2": { fontFamily: "'font_black', Arial, Helvetica, sans-serif" },
  ".attention p": { fontFamily: "'font_bold', Arial, Helvetica, sans-serif" },
  ".google-maps": {
    position: "relative",
    height: "15em",
    overflow: "hidden",
    borderLeft: "1px solid #E3ECF3"
  },
  ".google-maps iframe": {
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: 5,
    border: "0",
    zoom: 1
  },
  ".nozoom": {
    background: "none",
    position: "relative",
    width: "100%",
    height: "15em",
    top: "15em",
    marginTop: "-15em",
    zIndex: 5,
    cursor: "pointer"
  },
  footer: {
    padding: "0.7em 0 0.7em 0",
    textAlign: "center",
    textTransform: "uppercase",
    background: "#000",
    color: "#A1B2BE"
  },
  "footer p": {
    padding: "0 3em 0 3em",
    fontSize: "0.75em",
    letterSpacing: "0.25em",
    lineHeight: "1.25em",
    margin: "0"
  },
  "footer span": { display: "inline-block" },
  "#sect_actv_acc": {
    width: "20em",
    margin: "auto",
    color: "#FFF",
    textAlign: "center"
  },
  "#sect_actv_acc .select_actv_acc": {
    height: "2.5em",
    margin: "0.25em 0 0 0",
    border: "none",
    fontSize: "1em"
  },
  "#sect_actv_acc .select_actv_acc select": {
    background: "transparent",
    border: "none",
    padding: "0",
    margin: "0",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    cursor: "pointer"
  },
  "#sect_actv_acc .select_actv_acc.slate": {
    background: "#000",
    width: "100%",
    MozBorderRadius: "0.35em",
    WebkitBorderRadius: "0.35em",
    borderRadius: "0.35em",
    textAlign: "left"
  },
  "#sect_actv_acc .select_actv_acc.slate select": {
    fontSize: "1.15em",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    color: "#FFF",
    padding: "0.1em 0 0 0.75em",
    height: "1.6em",
    background: "#000 url(../img/ico-fleche3.svg) no-repeat",
    backgroundPosition: "right 0.15em",
    backgroundSize: "1.5em",
    margin: "0.25em 0",
    width: "16.5em"
  },
  "#sect_actv_acc .select_actv_acc select:hover, #sect_actv_acc .select_actv_acc select:focus": {
    color: "#FFF"
  },
  "#sect_actv_acc p": {
    fontSize: "1em",
    margin: "0",
    fontFamily: "'font_black', Arial, Helvetica, sans-serif",
    textTransform: "uppercase"
  },
  "#sect_actv": { width: "15em", textAlign: "left", padding: "0" },
  "#sect_actv .select_actv": {
    height: "1.75em",
    margin: "0.25em 0 0 0",
    border: "none",
    fontSize: "0.85em",
    marginBottom: "1em"
  },
  "#sect_actv .select_actv select": {
    background: "transparent",
    border: "none",
    padding: "0",
    margin: "0",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    cursor: "pointer"
  },
  "#sect_actv .select_actv.slate": {
    background: "#0DA2F2",
    width: "100%",
    MozBorderRadius: "0.35em",
    WebkitBorderRadius: "0.35em",
    borderRadius: "0.35em",
    textAlign: "left"
  },
  "#sect_actv .select_actv.slate select": {
    fontSize: "0.85em",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    color: "#FFFFFF",
    width: "98%",
    padding: "0.1em 0 0 0.5em",
    height: "1.5em",
    background: "#0DA2F2 url(../img/ico-fleche.svg) no-repeat",
    backgroundPosition: "right 0.3em",
    backgroundSize: "1.2em",
    margin: "0.25em 0"
  },
  "#sect_actv .select_actv select:hover, #sect_actv .select_actv select:focus": {
    color: "#FFF"
  },
  "#sect_actv p": {
    fontSize: "0.75em",
    margin: "0",
    fontFamily: "'font_bold', Arial, Helvetica, sans-serif",
    textAlign: "left"
  },
  ".autofitimg": {
    width: "100%",
    overflow: "hidden",
    height: "100%",
    marginTop: "3em"
  },
  ".autofitimg img": { width: "100%", height: "auto", margin: "-30% 0 0% 0" },
  "#autofitting2": {
    width: "100%",
    overflow: "hidden",
    height: "100%",
    marginTop: "3em"
  },
  "#autofitting2 img": { width: "100%", height: "auto", marginTop: "0" },
  ".rouge": { color: "#C00000" },
  ".bleu": { color: "#0DA2F2" },
  ".vert": { color: "#0E7AB9" },
  ".rose": { color: "#FC77FF" },
  ".jaune": { color: "#FFB300" },
  ".orange": { color: "#FF6600" },
  ".gris": { color: "#455560" },
  ".gris_p": { color: "#748794" },
  ".gris_m": { color: "#5f7381" },
  ".gris_f": { color: "#35424A" },
  ".blanc": { color: "#FFF" },
  ".noir": { color: "#000" },
  ".tleft": { textAlign: "left" },
  ".tcenter": { textAlign: "center" },
  ".tright": { textAlign: "right" },
  ".pclient": { width: "100%" },
  ".pclient .box": { borderTop: "1px solid #E3ECF3" },
  ".pclient .boxbandeaubg": {
    width: "100%",
    background: "#FFF url(../img/bgclient.svg)",
    backgroundSize: "4em"
  },
  ".pclient .boxbandeau": { width: "78%", margin: "auto", padding: "3em 0" },
  ".pclient .boxbandeau img": { width: "100%", height: "auto" },
  ".boxpromo": {
    display: "inline-block",
    width: "100%",
    margin: "auto",
    padding: "1.5em 0 1.5em 0",
    fontFamily: "'font_bold', sans-serif, Arial",
    textAlign: "center",
    background: "#FFF url(../img/promo-fleche.svg) no-repeat top center",
    backgroundSize: "2.25em",
    backgroundPosition: "top center",
    cursor: "default",
    height: "auto"
  },
  ".promo": { width: "90%", margin: "auto" },
  ".promo button": {
    textAlign: "center",
    margin: "auto",
    marginTop: "0.5em",
    marginBottom: "1.5em"
  },
  ".boxpromo h1": {
    fontSize: "1.8em",
    lineHeight: "1.25em",
    display: "block",
    marginBottom: "0.15"
  },
  ".boxpromo h2": {
    fontSize: "1.8em",
    lineHeight: "1.25em",
    display: "block",
    marginBottom: "0.15"
  },
  ".boxpromo h3": {
    fontSize: "1.7em",
    lineHeight: "1.25em",
    display: "block",
    marginBottom: "0.15"
  },
  ".boxpromo h4": {
    fontSize: "1.6em",
    lineHeight: "1.25em",
    display: "block",
    marginBottom: "0.15"
  },
  ".boxpromo h5": {
    fontSize: "1.5em",
    lineHeight: "1.25em",
    display: "block",
    marginBottom: "0.15"
  },
  ".boxpromo h6": {
    fontSize: "1.4em",
    lineHeight: "1.25em",
    display: "block",
    marginBottom: "0.15"
  },
  ".boxpromo .note": {
    fontSize: "0.75em",
    fontFamily: "'font_light', sans-serif, Arial"
  },
  ".promotxt": {
    display: "block",
    textTransform: "uppercase",
    fontSize: "1.5em",
    letterSpacing: "0.3em",
    background: "#C00000",
    color: "#FFF",
    fontFamily: "'font_bold', sans-serif, Arial",
    textAlign: "center",
    padding: "0.4em 0"
  },
  ".promo_edit textarea": {
    display: "inline-block",
    height: "1.25em",
    width: "100%",
    margin: "auto",
    background: "#f1f1f1",
    fontSize: "0.65em",
    textAlign: "center",
    marginTop: "1em"
  },
  ".promo_edit button": { display: "inline-block", marginTop: "1em" },
  ".promo_edit textarea:hover": { background: "#000" },
  ".promo_edit textarea:focus": { background: "#f1f1f1", height: "4em" },
  ".promo_edit:hover": { backgroundPosition: "center -10.25em" },
  ".promo_edit": {
    textAlign: "center",
    width: "70%",
    margin: "auto",
    marginTop: "1em"
  },
  ".promo_edit p": { fontSize: "0.75em" },
  ".pclient .boxtitre": {
    padding: "1em 0 0.75em 0",
    borderBottom: "1px #E3ECF3 solid",
    borderTop: "1px #E3ECF3 solid",
    color: "#455560",
    textAlign: "center",
    background: "#F7F9FB"
  },
  ".pclient h1": {
    fontSize: "1.75em",
    lineHeight: "1.3em",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    padding: "0 1em",
    fontFamily: "'font2_black', sans-serif, Arial",
    color: "#35424A"
  },
  ".pclient .add": {
    fontSize: "1.4em",
    width: "100%",
    padding: "1em 0 1em 0",
    color: "#455560",
    textAlign: "center",
    background: "#FFF",
    borderBottom: "1px solid #E3ECF3"
  },
  ".pclient .add p": { padding: "0", margin: "0" },
  ".pclient a": { color: "#455560" },
  ".pclient .bdr": { borderTop: "1px solid #E3ECF3" },
  ".pclient .left": { cssFloat: "left", width: "75%" },
  ".pclient .right": {
    cssFloat: "left",
    width: "24.9%",
    paddingBottom: "6em",
    borderBottom: "1px solid #E3ECF3",
    borderLeft: "1px solid #E3ECF3"
  },
  ".pclient .vsep": {
    borderLeft: "1px solid #E3ECF3",
    margin: "0",
    padding: "0",
    width: "auto"
  },
  ".pclient .left .client_info, .pclient .left .client_photo1, .pclient .left .client_photo2, .pclient .left .client_photo3, .pclient .left .client_photo4, .pclient .left .equipe_info, .pclient .left .equipe_photo, .pclient .left .client_logo, .pclient .left .services": {
    padding: "2em 4em 1em 4em",
    borderBottom: "1px solid #E3ECF3"
  },
  ".pclient .right .services, .pclient .right .client_info, .pclient .right .client_photo1, .pclient .right .client_photo2, .pclient .right .client_photo3, .pclient .right .client_photo4, .pclient .right .equipe_info, .pclient .right .equipe_photo, .pclient .right .client_logo, .pclient .right .services": {
    padding: "2em",
    borderBottom: "1px solid #E3ECF3"
  },
  ".pclient .left .services ul": {
    display: "inline-block",
    verticalAlign: "text-top",
    margin: "0em 3% 3em 1%",
    width: "45%"
  },
  ".pclient .left .services li, .pclient .right .services li": {
    color: "#748794",
    width: "100%",
    margin: "0",
    padding: "0",
    verticalAlign: "text-top",
    display: "inline-block"
  },
  ".pclient .left .services li span, .pclient .right .services li span": {
    display: "block",
    margin: "0",
    padding: "0",
    position: "absolute",
    marginLeft: "-1.4em",
    marginTop: "0.3em",
    width: "0.5em",
    height: "0.5em",
    MozBorderRadius: "0.15em",
    WebkitBorderRadius: "0.15em",
    borderRadius: "0.15em",
    borderTop: "0.15em solid #0E7AB9",
    borderRight: "0.15em solid #0E7AB9",
    MozTransform: "rotate(45deg)",
    OTransform: "rotate(45deg)",
    WebkitTransform: "rotate(45deg)",
    transform: "rotate(45deg)"
  },
  ".pclient .left .services li p, .pclient .right .services li p": {
    borderBottom: "1px solid #E3ECF3",
    margin: "0em 2em 0em 0.4em",
    padding: "0.7em 1em 0.7em 1.75em"
  },
  ".pclient .left .services ul.padbottom, .pclient .right .services ul.padbottom": {
    marginBottom: "2em"
  },
  ".pclient .left .equipe_info p span a, .pclient .right .equipe_info p span a": {
    display: "inline-block",
    padding: "0",
    margin: "0",
    textDecoration: "none",
    letterSpacing: "normal",
    fontFamily: "'font_black', sans-serif, Arial",
    cursor: "text"
  },
  ".pclient .left .client_info a.btn_std, \n.pclient .left .client_photo1 a.btn_std,\n.pclient .left .client_photo2 a.btn_std, .pclient .left .client_photo2_f a.btn_std,\n.pclient .left .client_photo3 a.btn_std, .pclient .left .client_photo3_f a.btn_std,\n.pclient .left .client_photo4 a.btn_std, .pclient .left .client_photo4_f a.btn_std,\n.pclient .left .equipe_info a.btn_std,\n.pclient .left .equipe_photo a.btn_std,\n.pclient .left .client_logo a.btn_std": {
    display: "inline-block",
    padding: "0.5em 1em",
    margin: "0",
    fontSize: "1em",
    color: "#FFF",
    letterSpacing: "normal"
  },
  ".pclient .right .client_info a.btn_std,\n.pclient .right .client_photo1 a.btn_std,\n.pclient .right .client_photo2 a.btn_std, .pclient .right .client_photo2_f a.btn_std, \n.pclient .right .client_photo3 a.btn_std, .pclient .right .client_photo3_f a.btn_std, \n.pclient .right .client_photo4 a.btn_std, .pclient .right .client_photo4_f a.btn_std, \n.pclient .right .equipe_info a.btn_std,\n.pclient .right .equipe_photo a.btn_std,\n.pclient .right .client_logo a.btn_std": {
    display: "inline-block",
    padding: "0.5em 1em",
    margin: "0",
    fontSize: "1.25em",
    color: "#FFF",
    letterSpacing: "normal"
  },
  ".pclient a.btn_std:hover": { background: "#000" },
  ".pclient .services img,\n.pclient .client_info img,\n.pclient .client_photo1 img,\n.pclient .client_photo2 img, .pclient .client_photo2_f img, \n.pclient .client_photo3 img, .pclient .client_photo3_f img, \n.pclient .client_photo4 img, .pclient .client_photo4_f img, \n.pclient .equipe_info img,\n.pclient .equipe_photo img,\n.pclient .client_logo img": {
    width: "100%",
    height: "auto"
  },
  ".pclient .left .services h2,\n.pclient .left .client_info h2,\n.pclient .left .client_photo1 h2, \n.pclient .left .client_photo2 h2, .pclient .left .client_photo2_f h2, \n.pclient .left .client_photo3 h2, .pclient .left .client_photo3_f h2, \n.pclient .left .client_photo4 h2, .pclient .left .client_photo4_f h2,\n.pclient .left .equipe_info h2,\n.pclient .left .equipe_photo h2,\n.pclient .left .client_logo h2": {
    fontSize: "2.25em"
  },
  ".pclient .right .services h2,\n.pclient .right .client_info h2,\n.pclient .right .client_photo1 h2,\n.pclient .right .client_photo2 h2, .pclient .right .client_photo2_f h2, \n.pclient .right .client_photo3 h2, .pclient .right .client_photo3_f h2, \n.pclient .right .client_photo4 h2, .pclient .right .client_photo4_f h2, \n.pclient .right .equipe_info h2,\n.pclient .right .equipe_photo h2,\n.pclient .right .client_logo h2": {
    fontSize: "1.75em"
  },
  ".pclient .left .services h3,\n.pclient .left .client_info h3,\n.pclient .left .client_photo1 h3,\n.pclient .left .client_photo2 h3, .pclient .left .client_photo2_f h3, \n.pclient .left .client_photo3 h3, .pclient .left .client_photo3_f h3, \n.pclient .left .client_photo4 h3, .pclient .left .client_photo4_f h3, \n.pclient .left .equipe_info h3,\n.pclient .left .equipe_photo h3,\n.pclient .left .client_logo h3": {
    fontSize: "1.75em",
    lineHeight: "1.2em",
    margin: "0.5em 0"
  },
  ".pclient .right .services h3,\n.pclient .right .client_info h3,\n.pclient .right .client_photo1 h3,\n.pclient .right .client_photo2 h3, .pclient .right .client_photo2_f h3, \n.pclient .right .client_photo3 h3, .pclient .right .client_photo3_f h3, \n.pclient .right .client_photo4 h3, .pclient .right .client_photo4_f h3, \n.pclient .right .equipe_info h3,\n.pclient .right .equipe_photo h3,\n.pclient .right .client_logo h3": {
    fontSize: "1.5em",
    margin: "0.4em 0"
  },
  ".pclient .left .services h4,\n.pclient .left .client_info h4,\n.pclient .left .client_photo1 h4,\n.pclient .left .client_photo2 h4, .pclient .left .client_photo2_f h4, \n.pclient .left .client_photo3 h4, .pclient .left .client_photo3_f h4, \n.pclient .left .client_photo4 h4, .pclient .left .client_photo4_f h4, \n.pclient .left .equipe_info h4,\n.pclient .left .equipe_photo h4,\n.pclient .left .client_logo h4": {
    fontSize: "1.25em",
    margin: "0.5em 0"
  },
  ".pclient .right .services h4,\n.pclient .right .client_info h4,\n.pclient .right .client_photo1 h4,\n.pclient .right .client_photo2 h4, .pclient .right .client_photo2_f h4, \n.pclient .right .client_photo3 h4, .pclient .right .client_photo3_f h4, \n.pclient .right .client_photo4 h4, .pclient .right .client_photo4_f h4, \n.pclient .right .equipe_info h4,\n.pclient .right .equipe_photo h4,\n.pclient .right .client_logo h4": {
    fontSize: "1.2em",
    margin: "0.5em 0"
  },
  ".pclient .left .services h5,\n.pclient .left .client_info h5,\n.pclient .left .client_photo1 h5,\n.pclient .left .client_photo2 h5, .pclient .left .client_photo2_f h5, \n.pclient .left .client_photo3 h5, .pclient .left .client_photo3_f h5, \n.pclient .left .client_photo4 h5, .pclient .left .client_photo4_f h5, \n.pclient .left .equipe_info h5,\n.pclient .left .equipe_photo h5,\n.pclient .left .client_logo h5": {
    fontSize: "1em",
    margin: "0.5em 0"
  },
  ".pclient .right .services h5,\n.pclient .right .client_info h5,\n.pclient .right .client_photo1 h5,\n.pclient .right .client_photo2 h5, .pclient .right .client_photo2_f h5, \n.pclient .right .client_photo3 h5, .pclient .right .client_photo3_f h5, \n.pclient .right .client_photo4 h5, .pclient .right .client_photo4_f h5, \n.pclient .right .equipe_info h5,\n.pclient .right .equipe_photo h5,\n.pclient .right .client_logo h5": {
    fontSize: "1em",
    margin: "0.5em 0"
  },
  ".pclient .left .services h6,\n.pclient .left .client_info h6,\n.pclient .left .client_photo1 h6,\n.pclient .left .client_photo2 h6, .pclient .left .client_photo2_f h6, \n.pclient .left .client_photo3 h6, .pclient .left .client_photo3_f h6, \n.pclient .left .client_photo4 h6, .pclient .left .client_photo4_f h6, \n.pclient .left .equipe_info h6,\n.pclient .left .equipe_photo h6,\n.pclient .left .client_logo h6": {
    fontSize: "0.75em",
    margin: "0.5em 0"
  },
  ".pclient .right .services h6,\n.pclient .right .client_info h6,\n.pclient .right .client_photo1 h6,\n.pclient .right .client_photo2 h6, .pclient .right .client_photo2_f h6, \n.pclient .right .client_photo3 h6, .pclient .right .client_photo3_f h6, \n.pclient .right .client_photo4 h6, .pclient .right .client_photo4_f h6, \n.pclient .right .equipe_info h6,\n.pclient .right .equipe_photo h6,\n.pclient .right .client_logo h6": {
    fontSize: "0.75em",
    margin: "0.5em 0"
  },
  ".pclient .left .services p,\n.pclient .left .client_info p,\n.pclient .left .client_photo1 p,\n.pclient .left .client_photo2 p, .pclient .left .client_photo2_f p, \n.pclient .left .client_photo3 p, .pclient .left .client_photo3_f p, \n.pclient .left .client_photo4 p, .pclient .left .client_photo4_f p, \n.pclient .left .equipe_info p,\n.pclient .left .equipe_photo p,\n.pclient .left .client_logo p": {
    fontSize: "0.85em",
    margin: "0.75em 0",
    textAlign: "left",
    width: "95%"
  },
  ".pclient .left .client_photo1 li p,\n.pclient .left .client_photo1_f li p,\n.pclient .left .client_photo2 li p,\n.pclient .left .client_photo2_f li p,\n.pclient .left .client_photo3 li p,\n.pclient .left .client_photo3_f li p,\n.pclient .left .client_photo4 li p,\n.pclient .left .client_photo4_f li p": {
    textAlign: "center"
  },
  ".pclient .right .services p,\n.pclient .right .client_info p,\n.pclient .right .client_photo1 p,\n.pclient .right .client_photo2 p, .pclient .right .client_photo2_f p, \n.pclient .right .client_photo3 p, .pclient .right .client_photo3_f p, \n.pclient .right .client_photo4 p, .pclient .right .client_photo4_f p, \n.pclient .right .equipe_info p,\n.pclient .right .equipe_photo p,\n.pclient .right .client_logo p": {
    fontSize: "0.75em",
    margin: "0.75em 0",
    textAlign: "left",
    width: "95%"
  },
  ".photo": { width: "100%", height: "auto" },
  ".photo img": { width: "100%", height: "auto" },
  ".pclient .left .client_photo1 ul": { marginBottom: "1.5em" },
  ".pclient .left .client_photo1_f ul": { marginBottom: "0em" },
  ".pclient .left .client_photo1 li": {
    display: "inline-block",
    width: "100%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .left .client_photo1 img": { width: "100%", height: "auto" },
  ".pclient .left .client_photo1_f img": { width: "100%", height: "auto" },
  ".pclient .left .client_photo2 ul": { marginBottom: "1.5em" },
  ".pclient .left .client_photo2_f ul": { marginBottom: "0em" },
  ".pclient .left .client_photo2 li": {
    display: "inline-block",
    width: "50%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .left .client_photo2_f li": {
    display: "inline-block",
    width: "50%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .left .client_photo2 img": { width: "100%", height: "auto" },
  ".pclient .left .client_photo2_f img": { width: "100%", height: "auto" },
  ".pclient .left .client_photo3 ul": { marginBottom: "1.5em" },
  ".pclient .left .client_photo3_f ul": { marginBottom: "0em" },
  ".pclient .left .client_photo3 li": {
    display: "inline-block",
    width: "33.33%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .left .client_photo3_f li": {
    display: "inline-block",
    width: "33.33%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .left .client_photo3 img": { width: "100%", height: "auto" },
  ".pclient .left .client_photo3_f img": { width: "100%", height: "auto" },
  ".pclient .left .client_photo4 ul": { marginBottom: "1.5em" },
  ".pclient .left .client_photo4_f ul": { marginBottom: "0em" },
  ".pclient .left .client_photo4 li": {
    display: "inline-block",
    width: "25%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .left .client_photo4_f li": {
    display: "inline-block",
    width: "25%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .left .client_photo4 img": { width: "100%", height: "auto" },
  ".pclient .left .client_photo4_f img": { width: "100%", height: "auto" },
  ".pclient .left .equipe_photo ul": { margin: "1em 0" },
  ".pclient .left .equipe_photo li": {
    display: "inline-block",
    width: "17.3%",
    padding: "0.5em 0.8em 0.5em 0",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .left .equipe_photo li a": {
    display: "block",
    width: "100%",
    margin: "0.5em 0"
  },
  ".pclient .left .equipe_photo img": { width: "100%", height: "auto" },
  ".pclient .left .equipe_photo li p": { textAlign: "center" },
  ".pclient .left .equipe_photo li p a": {
    display: "block",
    textAlign: "center",
    width: "100%",
    margin: "0.5em 0"
  },
  ".pclient .left .equipe_photo li p a.lientel": {
    textDecoration: "none",
    fontSize: "1em",
    fontFamily: "'font_bold', sans-serif, Arial"
  },
  ".pclient .left .equipe_photo li p span": {
    fontSize: "0.75em",
    fontFamily: "'font_bold', sans-serif, Arial"
  },
  ".pclient .left .client_photo1 p, .pclient .left .client_photo2 p, .pclient .left .client_photo3 p": {
    padding: "0",
    margin: "0"
  },
  ".pclient .left .client_photo1 p span, .pclient .left .client_photo2 p span, .pclient .left .client_photo3 p span": {
    textAlign: "center",
    display: "block",
    margin: "0.75em 0.5em 1.75em 0.5em"
  },
  ".pclient .left .equipe_info ul": {
    display: "inline-block",
    width: "99%",
    margin: "0"
  },
  ".pclient .left .equipe_info li": {
    display: "inline-block",
    color: "#748794",
    background: "#F7F9FB",
    margin: "0.2em 0.2em",
    padding: "0.5em 1%",
    verticalAlign: "top",
    width: "21%"
  },
  ".pclient .left .equipe_info li:hover, .pclient .right .equipe_info li:hover": {
    background: "#fff"
  },
  ".pclient .left .equipe_info li p": {
    fontSize: "0.8em",
    borderBottom: "none",
    padding: "0",
    margin: "0"
  },
  ".pclient .left a": { color: "#748794" },
  ".pclient .left .client_logo ul": { textAlign: "left", margin: "1.5em" },
  ".pclient .left .client_logo li": {
    width: "15%",
    display: "inline-block",
    padding: "0 2%"
  },
  ".pclient .left .client_logo img": { width: "100%", margin: "auto" },
  ".pclient .right .equipe_photo p": { width: "100%", margin: "0.5em 0" },
  ".pclient .right .equipe_photo li p": {
    textAlign: "center",
    fontSize: "0.75em"
  },
  ".pclient .right .equipe_photo li p a": {
    display: "block",
    textAlign: "center",
    width: "100%",
    margin: "0.5em 0",
    fontSize: "1em"
  },
  ".pclient .right .equipe_photo li p a.lientel": {
    textDecoration: "none",
    fontSize: "1em",
    fontFamily: "'font_bold', sans-serif, Arial"
  },
  ".pclient .right .equipe_photo li p span": {
    fontSize: "0.75em",
    fontFamily: "'font_bold', sans-serif, Arial"
  },
  ".pclient .right .client_photo1 ul": { marginBottom: "1.5em" },
  ".pclient .right .client_photo1_f ul": { marginBottom: "0em" },
  ".pclient .right .client_photo1 li": {
    display: "inline-block",
    width: "100%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .right .client_photo1_f li": {
    display: "inline-block",
    width: "100%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .right .client_photo1 img": { width: "100%", height: "auto" },
  ".pclient .right .client_photo1_f img": { width: "100%", height: "auto" },
  ".pclient .right .client_photo2 ul": { marginBottom: "1.5em" },
  ".pclient .right .client_photo2_f ul": { marginBottom: "0em" },
  ".pclient .right .client_photo2 li": {
    display: "inline-block",
    width: "50%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .right .client_photo2_f li": {
    display: "inline-block",
    width: "50%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .right .client_photo2 img": { width: "100%", height: "auto" },
  ".pclient .right .client_photo2_f img": { width: "100%", height: "auto" },
  ".pclient .right .client_photo3 ul": { marginBottom: "1.5em" },
  ".pclient .right .client_photo3_f ul": { marginBottom: "0em" },
  ".pclient .right .client_photo3 li": {
    display: "inline-block",
    width: "33.33%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .right .client_photo3_f li": {
    display: "inline-block",
    width: "33.33%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .right .client_photo3 img": { width: "100%", height: "auto" },
  ".pclient .right .client_photo3_f img": { width: "100%", height: "auto" },
  ".pclient .right .client_photo4 ul": { marginBottom: "1.5em" },
  ".pclient .right .client_photo4_f ul": { marginBottom: "0" },
  ".pclient .right .client_photo4 li": {
    display: "inline-block",
    width: "25%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .right .client_photo4_f li": {
    display: "inline-block",
    width: "25%",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .right .client_photo4 img": { width: "100%", height: "auto" },
  ".pclient .right .client_photo4_f img": { width: "100%", height: "auto" },
  ".pclient .right .equipe_photo ul": {
    margin: "1.5em 0",
    fontSize: "0.7em",
    textAlign: "center"
  },
  ".pclient .right .equipe_photo li": {
    display: "inline-block",
    width: "30%",
    padding: "0.25em 0.25em 0em 0",
    verticalAlign: "top",
    textAlign: "center"
  },
  ".pclient .right .equipe_photo li a": {
    display: "block",
    width: "100%",
    margin: "0.5em 0"
  },
  ".pclient .right .equipe_photo img": { width: "100%", height: "auto" },
  ".pclient .right .client_photo1 p, .pclient .right .client_photo2 p, .pclient .right .client_photo3 p, .pclient .right .client_photo4 p": {
    padding: "0",
    margin: "0"
  },
  ".pclient .right .client_photo1 p span, .pclient .right .client_photo2 p span, .pclient .right .client_photo3 p span, .pclient .right .client_photo4 p span": {
    textAlign: "center",
    display: "block",
    margin: "0.75em 0.5em 1.75em 0.5em",
    lineHeight: "2em"
  },
  ".pclient .right .equipe_info ul": {
    display: "inline-block",
    width: "95%",
    margin: "0"
  },
  ".pclient .right .equipe_info li": {
    display: "inline-block",
    color: "#748794",
    background: "#F7F9FB",
    margin: "0.1em 0em",
    padding: "0.5em",
    verticalAlign: "top",
    width: "100%"
  },
  ".pclient .right .equipe_info li p": {
    fontSize: "0.65em",
    borderBottom: "none",
    padding: "0",
    margin: "0"
  },
  ".pclient .right a": { color: "#748794" },
  ".pclient .right .client_photo": {
    margin: "auto",
    textAlign: "left",
    width: "auto"
  },
  ".pclient .right .client_photo p": { padding: "0", margin: "0" },
  ".pclient .right .client_photo p span": {
    textAlign: "center",
    display: "block",
    margin: "0.75em 0.5em 1.75em 0.5em"
  },
  ".pclient .right .client_photo ul": { marginBottom: "0" },
  ".pclient .right .client_photo li": {
    display: "inline-block",
    width: "48%",
    padding: "0",
    verticalAlign: "top",
    textAlign: "center",
    lineHeight: "0.5em"
  },
  ".pclient .right .client_photo img": { width: "100%", height: "auto" },
  ".pclient .right .equipe_photo": { margin: "auto", width: "auto" },
  ".pclient .right .equipe_photo a, .pclient .left .equipe_photo a": {
    lineHeight: "normal"
  },
  ".pclient .right .client_logo ul": {
    textAlign: "center",
    marginTop: "1.5em"
  },
  ".pclient .right .client_logo": {
    width: "80%",
    margin: "auto",
    padding: "1.5em 10% 1.5em 10%"
  },
  ".pclient .right .client_logo li": { width: "48%", display: "inline-block" },
  ".pclient .right .client_logo img": {
    width: "100%",
    margin: "auto",
    padding: "1em 0 0 0"
  },
  ".pclient .right .horraire": {},
  ".pclient .right .horraire h2": {
    fontSize: "1em",
    textAlign: "center",
    background: "#F1F5F9",
    textTransform: "uppercase",
    padding: "0.75em 0",
    borderBottom: "1px solid #E3ECF3",
    fontFamily: "'font_black', Arial, Helvetica, sans-serif"
  },
  ".pclient .right .horraire ul": { margin: "1em 0em", padding: "0" },
  ".pclient .right .horraire li": {
    color: "#748794",
    display: "inline-block",
    width: "100%",
    margin: "0",
    padding: "0",
    textTransform: "uppercase",
    fontFamily: "'font_light', Arial, Helvetica, sans-serif"
  },
  ".pclient .right .horraire li p": {
    fontSize: "0.65em",
    borderBottom: "1px solid #E3ECF3",
    margin: "0em 2em 0em 3em",
    textAlign: "left",
    padding: "1em 1em 0.5em 0em"
  },
  ".pclient .right .horraire span": {
    cssFloat: "right",
    position: "relative",
    top: "-0.05em"
  },
  ".pclient .right .horraire li p.note_ouverture": {
    border: "none",
    fontFamily: "'font_black', Arial, Helvetica, sans-serif",
    cssFloat: "left"
  },
  ".pclient .right .telec": {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "0.75em",
    margin: "0 0 1.75em 0",
    background: "#F1F5F9",
    width: "auto",
    display: "block",
    padding: "1em 0",
    borderTop: "1px solid #E3ECF3",
    borderBottom: "1px solid #E3ECF3",
    fontFamily: "'font_black', Arial, Helvetica, sans-serif"
  },
  ".type_paiements": {
    textAlign: "center",
    padding: "0 3em 2em 3em",
    borderBottom: "1px solid #E3ECF3"
  },
  ".type_paiements h2": { fontSize: "1.25em", textAlign: "center" },
  ".type_paiements h3": { fontSize: "1.15em", textAlign: "center" },
  ".type_paiements h4": {
    fontSize: "0.75em",
    textAlign: "center",
    margin: "0 0 1em 0"
  },
  ".type_paiements img": {
    padding: "0.35em",
    display: "inline-block",
    verticalAlign: "middle",
    fontSize: "0.6em"
  },
  ".type_paiements img#visa": { width: "auto", height: "1.5em" },
  ".type_paiements img#mc": { width: "auto", height: "2.5em" },
  ".type_paiements img#amex": { width: "auto", height: "2.5em" },
  ".type_paiements img#interac": { width: "auto", height: "2.65em" },
  ".type_paiements img#accord": { width: "auto", height: "2.5em" },
  ".type_paiements img#paypal": { width: "auto", height: "1.5em" },
  ".box_partage": {
    maxWidth: "20em",
    marginBottom: "-3em",
    position: "absolute",
    zIndex: 10,
    height: "15em"
  },
  ".box_partage_content": {
    maxWidth: "52em",
    position: "absolute",
    left: "4em",
    background: "#FFFFFF",
    bottom: "0em",
    padding: "0.75em 0.75em 0 0.75em",
    borderTop: "1px solid #E3ECF3",
    borderLeft: "1px solid #E3ECF3",
    borderRight: "1px solid #E3ECF3",
    boxShadow: "0em -0.4em 1em rgba(0,0,0,0.1)",
    WebkitBorderTopRightRadius: "0.5em",
    MozBorderRadiusTopleft: "0.5em",
    MozBorderRadiusTopright: "0.5em",
    WebkitBorderTopLeftRadius: "0.5em",
    borderTopLeftRadius: "0.5em",
    borderTopRightRadius: "0.5em",
    minWidth: "2.5em",
    minHeight: "2.25em",
    maxHeight: "100%",
    overflow: "hidden"
  },
  ".box_partage .smedia": { width: "700px" },
  ".shareicons.fb": {
    marginRight: "0.5em",
    marginBottom: "0.4em",
    display: "block",
    width: "2.25em",
    cssFloat: "left"
  },
  ".shareicons.fb a": {
    display: "block",
    height: "2.25em",
    width: "2.25em",
    textDecoration: "none",
    background:
      "rgba(59,89,151,1) url(../img/ico-facebook.svg) center center no-repeat",
    backgroundSize: "100%"
  },
  ".shareicons.instagram": {
    marginRight: "0.5em",
    marginBottom: "0.4em",
    display: "block",
    width: "2.25em",
    cssFloat: "left"
  },
  ".shareicons.instagram a": {
    display: "block",
    height: "2.25em",
    width: "2.25em",
    textDecoration: "none",
    background: "url(../img/ico-instagram.svg) center center no-repeat",
    backgroundSize: "100%"
  },
  ".shareicons.linkedin": {
    marginRight: "0.5em",
    marginBottom: "0.4em",
    display: "block",
    width: "2.25em",
    cssFloat: "left"
  },
  ".shareicons.linkedin a": {
    display: "block",
    height: "2.25em",
    width: "2.25em",
    textDecoration: "none",
    background:
      "rgba(0,119,183,1) url(../img/ico-linkedin.svg) center center no-repeat",
    backgroundSize: "100%"
  },
  ".shareicons.pinterest": {
    marginRight: "0.5em",
    marginBottom: "0.4em",
    display: "block",
    width: "2.25em",
    cssFloat: "left"
  },
  ".shareicons.pinterest a": {
    display: "block",
    height: "2.25em",
    width: "2.25em",
    textDecoration: "none",
    background:
      "rgba(255,0,0,1) url(../img/ico-pinterest.png) center center no-repeat",
    backgroundSize: "100%"
  },
  ".box_partage .url": {
    display: "block",
    padding: "0.1em 0em 0.5em 0",
    cssFloat: "left",
    width: "80%"
  },
  ".box_partage .smedia .url": { width: "auto" },
  ".box_partage .url a": {
    fontSize: "1.65em",
    letterSpacing: "-0.025em",
    display: "inline-block",
    whiteSpace: "nowrap",
    width: "100%",
    fontFamily: "'font_black', Arial, Helvetica, sans-serif",
    marginRight: "1.75em"
  },
  ".box_partage .smedia .url a": { marginRight: "0" },
  ".box_partage .addthis_inline_share_toolbox": {
    minWidth: "16.25em",
    margin: "0",
    padding: "0",
    cssFloat: "left",
    display: "block"
  },
  ".box_partage .addthis_inline_share_toolbox p": {
    fontSize: "0.65em",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    textTransform: "uppercase",
    padding: "0",
    margin: "0 0 0.4em 0",
    width: "100%",
    display: "block"
  },
  ".shareicons.www": {
    display: "inline-block",
    height: "2.25em",
    width: "2.25em",
    margin: "0 0.15em",
    padding: "0",
    verticalAlign: "top",
    marginBottom: "0.75em"
  },
  ".shareicons.www a span": {
    color: "#455560",
    width: "auto",
    height: "auto",
    margin: "0em 0 0 1.4em",
    padding: "0.1em 0 0 0",
    textDecoration: "none",
    fontSize: "1.38em",
    display: "inline-block",
    fontFamily: "'font_black', Arial, Helvetica, sans-serif"
  },
  ".shareicons.www a span:hover": { textDecoration: "none", color: "#000" },
  ".shareicons.www a span span": {
    fontSize: "0.5em",
    display: "inline",
    textDecoration: "none"
  },
  ".shareicons.www a span span.ext": {
    padding: "0",
    display: "inline",
    margin: "0"
  },
  ".shareicons.fb a span": {
    padding: "1em 0 0 0",
    textDecoration: "underline",
    verticalAlign: "text-top",
    display: "inline-block"
  },
  ".shareicons.fb a:hover": {
    background:
      "rgba(0,0,0,1) url(../img/ico-facebook.svg) center center no-repeat",
    backgroundSize: "100%"
  },
  ".shareicons.instagram a span": {
    padding: "1em 0 0 0",
    textDecoration: "underline",
    verticalAlign: "text-top",
    display: "inline-block"
  },
  ".shareicons.instagram a:hover": {
    background:
      "rgba(0,0,0,1) url(../img/ico-instagram.svg) center center no-repeat",
    backgroundSize: "100%"
  },
  ".shareicons.linkedin a span": {
    padding: "1em 0 0 0",
    textDecoration: "underline",
    verticalAlign: "text-top",
    display: "inline-block"
  },
  ".shareicons.linkedin a:hover": {
    background:
      "rgba(0,0,0,1) url(../img/ico-linkedin.svg) center center no-repeat",
    backgroundSize: "100%"
  },
  ".shareicons.www a": {
    background: "#0E7AB9 url(../img/ico-www.svg) center center no-repeat",
    backgroundSize: "80%"
  },
  ".shareicons.www a:hover": {
    background: "rgba(0,0,0,1) url(../img/ico-www.svg) center center no-repeat",
    backgroundSize: "80%"
  },
  ".pregions": { borderLeft: "1px solid #E3ECF3" },
  ".box_pregions": { cssFloat: "left", width: "75%" },
  ".pregions.top": {
    padding: "3.65em 3em 2em 3em",
    borderLeft: "1px solid #E3ECF3",
    borderBottom: "1px solid #E3ECF3",
    background: "#F1F5F9"
  },
  ".pregions .banniere_xtra": {
    width: "70%",
    margin: "auto",
    paddingTop: "3em"
  },
  ".pregions .banniere_xtra img": {
    width: "100%",
    height: "auto",
    marginBottom: "1em"
  },
  ".pregions .list": { padding: "0em 3em 3em 3em" },
  ".pregions h1": {
    fontSize: "3em",
    letterSpacing: "-0.03em",
    color: "#455560",
    textDecoration: "none",
    margin: "0 0 0.3em 0",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif"
  },
  ".pregions h1 a, .pregions h1 a:hover": {
    fontSize: "1em",
    letterSpacing: "-0.03em",
    color: "#455560",
    textDecoration: "none",
    margin: "0 0 0.3em 0",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    cursor: "text"
  },
  ".pregions h1 span": {
    fontSize: "0.5em",
    width: "1.5em",
    height: "1.5em",
    padding: "0.35em 0.25em 0.15em 0.25em",
    display: "inline-block",
    background: "#0E7AB9",
    MozBorderRadius: "50%",
    WebkitBorderRadius: "50%",
    borderRadius: "50%",
    verticalAlign: "top",
    margin: "0.25em 0.25em 0.25em 0.25em"
  },
  ".pregions h1 img": { width: "100%", height: "auto" },
  ".pregions h2": {
    fontSize: "1.2em",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    letterSpacing: "normal",
    margin: "4em 0 0 0"
  },
  ".pregions h2 a": {
    display: "block",
    textDecoration: "none",
    color: "#FFF",
    background: "#A1B2BE url(../img/ico-top.svg) no-repeat 100% 0",
    padding: "0.3em 0.5em",
    backgroundSize: "1.85em",
    MozBorderRadius: "0.35em",
    WebkitBorderRadius: "0.35em",
    borderRadius: "0.1em"
  },
  ".pregions h2 a:hover": {
    background: "#A1B2BE url(../img/ico-top.svg) no-repeat 100% -1.85em",
    backgroundSize: "1.85em",
    color: "#F7F9FB"
  },
  ".pregions .col_client1": {
    display: "inline-block",
    width: "15%",
    verticalAlign: "top"
  },
  ".pregions .col_client2": {
    display: "inline-block",
    width: "60%",
    margin: "0 2%",
    verticalAlign: "top"
  },
  ".pregions .col_client2 h3": { fontSize: "1.65em" },
  ".pregions .col_client2 img": {
    width: "auto",
    height: "1.25em",
    display: "inline-block",
    margin: "0.25em 0.1em 0 0"
  },
  ".pregions .col_client3": {
    display: "inline-block",
    width: "20%",
    verticalAlign: "top"
  },
  ".pregions .box_client": {
    display: "inline-block",
    width: "100%",
    margin: "0",
    padding: "1em 0",
    borderBottom: "1px solid #E3ECF3"
  },
  ".pregions .box_icons": { width: "11.2em" },
  ".pregions .box_icons .btn_tel": {
    width: "7em",
    MozBorderRadius: "0.25em",
    WebkitBorderRadius: "0.25em",
    borderRadius: "0.25em"
  },
  ".pregions h3 a": {
    fontSize: "1.2em",
    lineHeight: "1em",
    padding: "0",
    fontFamily: "'font2_black', Arial, Helvetica, sans-serif",
    color: "#455560",
    textDecoration: "none"
  },
  ".pregions p": {
    fontSize: "0.85em",
    padding: "0",
    fontFamily: "'font_bold', Arial, Helvetica, sans-serif",
    display: "inline-block",
    margin: "0"
  },
  ".pregions .banniere": { padding: "0em" },
  ".pregions .banniere img": { width: "100%", height: "auto" },
  ".pregions .toggle_regions": {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    margin: "0",
    padding: "0 0 3em 0",
    fontSize: "1.15em"
  },
  ".pregions .toggle_regions .cache_texte": {
    position: "absolute",
    bottom: "0em",
    display: "block",
    width: "100%",
    height: "3em",
    background: "#F1F5F9"
  },
  ".pregions .toggle_regions .cache_texte .btn_ouvrir": {
    width: "15em",
    height: "1.25em",
    padding: "0.5em",
    cursor: "pointer",
    textDecoration: "none",
    background: "#0E7AB9 url(../img/ico-fleche3.svg) no-repeat  97% 0.5em",
    marginTop: "0em",
    backgroundSize: "1.4em",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    color: "#FFF"
  },
  ".pregions .toggle_regions .cache_texte .btn_ouvrir:hover": {
    background: "#000 url(../img/ico-fleche3.svg) no-repeat 97% 0.5em",
    backgroundSize: "1.4em"
  },
  ".pregions .toggle_regions .cache_texte .btn_ouvrir.fermer": {
    background: "#0E7AB9 url(../img/ico-fleche3.svg) no-repeat 97% -1.05em",
    backgroundSize: "1.4em"
  },
  ".pregions .toggle_regions .cache_texte .btn_ouvrir.fermer:hover": {
    background: "#000 url(../img/ico-fleche3.svg) no-repeat 97% -1.05em",
    backgroundSize: "1.4em"
  },
  ".pregions .toggle_regions ul": { margin: "0 0 0.7em 0" },
  ".pregions .toggle_regions li": {
    display: "inline-block",
    fontSize: "0.7em",
    fontFamily: "'font_bold', Arial, Helvetica, sans-serif",
    margin: "0.7em 0.1em"
  },
  ".pregions .toggle_regions a": {
    color: "#455560",
    background: "#FFF",
    padding: "0.5em",
    textDecoration: "none"
  },
  ".pregions .toggle_regions a:hover": { color: "#FFF", background: "#0E7AB9" },
  ".pregions_icon": { width: "auto", display: "inline-block" },
  ".pregions_icon.rdv a, .pregions_icon.info a, .pregions_icon.www a, .pregions_icon.map a": {
    display: "block",
    height: "2.5em",
    width: "2.5em",
    textDecoration: "none",
    margin: "0 0.1em 0 0"
  },
  ".pregions_icon.rdv a": {
    background: "#0E7AB9 url(../img/ico-rdv.svg) center center no-repeat",
    backgroundSize: "80%"
  },
  ".pregions_icon.rdv a:hover": {
    background: "#000 url(../img/ico-rdv.svg) center center no-repeat",
    backgroundSize: "80%"
  },
  ".pregions_icon.info a": {
    background: "#0E7AB9 url(../img/ico-info.svg) center center no-repeat",
    backgroundSize: "80%"
  },
  ".pregions_icon.info a:hover": {
    background: "#000 url(../img/ico-info.svg) center center no-repeat",
    backgroundSize: "80%"
  },
  ".pregions_icon.www a": {
    background: "#0E7AB9 url(../img/ico-www.svg) center center no-repeat",
    backgroundSize: "80%"
  },
  ".pregions_icon.www a:hover": {
    background: "#000 url(../img/ico-www.svg) center center no-repeat",
    backgroundSize: "80%"
  },
  ".pregions_icon.map a": {
    background: "#0E7AB9 url(../img/ico-map2.svg) center center no-repeat",
    backgroundSize: "80%"
  },
  ".pregions_icon.map a:hover": {
    background: "#000 url(../img/ico-map2.svg) center center no-repeat",
    backgroundSize: "80%"
  },
  ".pregions_icon.rdv2, .pregions_icon.info2, .pregions_icon.www2, .pregions_icon.map2": {
    display: "inline-block",
    height: "2.5em",
    width: "2.5em",
    margin: "0 0.1em 0 0"
  },
  ".pregions_icon.rdv2": {
    background: "#E4EAEF url(../img/ico-rdv.svg) center center no-repeat",
    backgroundSize: "80%"
  },
  ".pregions_icon.info2": {
    background: "#E4EAEF url(../img/ico-info.svg) center center no-repeat",
    backgroundSize: "80%"
  },
  ".pregions_icon.www2": {
    background: "#E4EAEF url(../img/ico-www.svg) center center no-repeat",
    backgroundSize: "80%"
  },
  ".pregions_icon.map2": {
    background: "#E4EAEF url(../img/ico-map2.svg) center center no-repeat",
    backgroundSize: "80%"
  },
  ".pregions p.exclusif": {
    fontSize: "1.2em",
    fontFamily: "'font_black', Arial, Helvetica, sans-serif"
  },
  ".pregions #sect_actv .select_actv": { fontSize: "1em" },
  ".bg_annonceurs": {
    cssFloat: "left",
    width: "100%",
    background:
      "#0E7AB9 url(../img/ico-left-investissement.svg) no-repeat 4.5% center",
    backgroundSize: "15em 15em"
  },
  ".box_annonceurs": {
    width: "75%",
    cssFloat: "right",
    padding: "6em 0 4em 0",
    background: "#FFF",
    textAlign: "center"
  },
  ".box_annonceurs h1": {
    fontSize: "2em",
    lineHeight: "1em",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif"
  },
  ".box_annonceurs h2": {
    fontSize: "1.25em",
    width: "80%",
    margin: "auto",
    marginTop: "1em",
    marginBottom: "1.5em"
  },
  ".box_annonceurs h3": {
    fontSize: "0.9em",
    lineHeight: "1.2em",
    width: "60%",
    margin: "auto",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    marginTop: "2em"
  },
  ".box_annonceurs p": {
    fontSize: "0.7em",
    letterSpacing: "normal",
    marginTop: "0.5em"
  },
  ".adhwidth": { width: "80%", margin: "auto" },
  ".pannonceurs .toggle_regions": {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    margin: "0",
    padding: "0 0 3em 0",
    fontSize: "1.15em"
  },
  ".pannonceurs .toggle_regions .cache_texte": {
    position: "absolute",
    bottom: "0em",
    display: "block",
    width: "100%",
    height: "3em",
    background: "#F1F5F9"
  },
  ".pannonceurs .toggle_regions .cache_texte .btn_ouvrir": {
    width: "15em",
    height: "1.25em",
    padding: "0.5em",
    cursor: "pointer",
    textDecoration: "none",
    background: "#0E7AB9 url(../img/ico-fleche3.svg) no-repeat  97% 0.5em",
    marginTop: "0em",
    backgroundSize: "1.4em",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    color: "#FFF"
  },
  ".pannonceurs .toggle_regions .cache_texte .btn_ouvrir:hover": {
    background: "#000 url(../img/ico-fleche3.svg) no-repeat 97% 0.5em",
    backgroundSize: "1.4em"
  },
  ".pannonceurs .toggle_regions .cache_texte .btn_ouvrir.fermer": {
    background: "#0E7AB9 url(../img/ico-fleche3.svg) no-repeat 97% -1.05em",
    backgroundSize: "1.4em"
  },
  ".pannonceurs .toggle_regions .cache_texte .btn_ouvrir.fermer:hover": {
    background: "#000 url(../img/ico-fleche3.svg) no-repeat 97% -1.05em",
    backgroundSize: "1.4em"
  },
  ".pannonceurs .toggle_regions ul": { margin: "0 0 0.7em 0" },
  ".pannonceurs .toggle_regions li": {
    display: "inline-block",
    fontSize: "0.7em",
    fontFamily: "'font_bold', Arial, Helvetica, sans-serif",
    margin: "0.7em 0.1em"
  },
  ".pannonceurs .toggle_regions a": {
    color: "#455560",
    background: "#FFF",
    padding: "0.5em",
    textDecoration: "none"
  },
  ".pannonceurs .toggle_regions a:hover": {
    color: "#FFF",
    background: "#0E7AB9"
  },
  "#box_annonceurs": {
    width: "75%",
    cssFloat: "right",
    background: "#F1F5F9",
    borderTop: "1px solid #E3ECF3"
  },
  "#boxprix, #boxprix2": {
    width: "90%",
    margin: "auto",
    textAlign: "center",
    paddingBottom: "2em",
    borderBottom: "1px solid #E3ECF3"
  },
  "#boxprix2": { marginTop: "5em", marginBottom: "3em" },
  "#boxprix .bdr, #boxprix2 .bdr": {
    borderTop: "1px solid #E3ECF3",
    borderBottom: "1px solid #E3ECF3",
    padding: "0",
    marginBottom: "1em"
  },
  "#boxprix .titre, #boxprix2 .titre": {
    fontSize: "2em",
    fontFamily: "'font_light', Arial, Helvetica, sans-serif",
    margin: "0.6em 0 0.3em 0",
    letterSpacing: "-0.03em",
    textAlign: "left"
  },
  "#boxprix  ul, #boxprix2  ul": {
    padding: "0",
    width: "100%",
    fontSize: "1em"
  },
  "#boxprix  ul .range, #boxprix2  ul .range": {
    width: "100%",
    display: "block"
  },
  "#boxprix  li, #boxprix2  li": { cssFloat: "left", width: "100%" },
  "#boxprix .prix_col0.nobdr, #boxprix2 .prix_col0.nobdr": { border: "none" },
  "#boxprix a.liencache": {
    width: "50%",
    margin: "auto",
    textAlign: "center",
    marginTop: "1em",
    padding: "2em 0 0 0",
    cursor: "default",
    display: "block",
    textDecoration: "none"
  },
  "#boxprix  li ul li.prix_col0, #boxprix2  li ul li.prix_col0": {
    cssFloat: "left",
    width: "16.66%",
    borderBottom: "1px solid #E3ECF3",
    padding: "0.5em 0",
    height: "4em"
  },
  "#boxprix  li ul li.prix_col0#haut, #boxprix2  li ul li.prix_col0#haut": {
    height: "5em"
  },
  "#boxprix  li ul li.prix_col0#haut .apartir, #boxprix2  li ul li.prix_col0#haut .apartir": {
    margin: "3.75em 0 0 0"
  },
  "#boxprix  li ul li.prix_col1, #boxprix2  li ul li.prix_col1": {
    cssFloat: "left",
    width: "16.66%",
    borderBottom: "1px solid #E3ECF3",
    padding: "0.5em 0",
    height: "4em"
  },
  "#boxprix  li ul li.prix_col2, #boxprix2  li ul li.prix_col2": {
    cssFloat: "left",
    width: "16.66%",
    borderBottom: "1px solid #E3ECF3",
    background: "#F7F9FB",
    padding: "0.5em 0",
    height: "4em"
  },
  "#boxprix h1, #boxprix2 h1": {
    width: "80%",
    cssFloat: "right",
    borderBottom: "1px solid #E3ECF3",
    fontSize: "1.5em",
    lineHeight: "0.75em",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    margin: "0",
    padding: "0.75em 0"
  },
  "#boxprix h2, #boxprix2 h2": {
    fontSize: "3em",
    lineHeight: "1em",
    fontFamily: "'font2_black', Arial, Helvetica, sans-serif",
    margin: "0",
    padding: "0"
  },
  "#boxprix h3, #boxprix2 h3": {
    fontSize: "1.5em",
    lineHeight: "1em",
    fontFamily: "'font2_black', Arial, Helvetica, sans-serif",
    margin: "0.115em 0 0 0",
    padding: "0"
  },
  "#boxprix h3 span, #boxprix2 h3 span": {
    fontSize: "0.7em",
    lineHeight: "1em",
    fontFamily: "'font2_black', Arial, Helvetica, sans-serif",
    margin: "0",
    padding: "0"
  },
  "#boxprix p, #boxprix2 p": {
    fontSize: "1em",
    lineHeight: "0.5em",
    margin: "0",
    padding: "0",
    textTransform: "uppercase",
    fontFamily: "'font2_black', Arial, Helvetica, sans-serif"
  },
  "#boxprix .rabais, #boxprix2 .rabais": {
    background: "#0E7AB9",
    padding: "0.6em",
    display: "block",
    color: "#FFFFFF",
    fontSize: "0.85em",
    width: "3em",
    margin: "auto",
    marginTop: "0.25em"
  },
  "#boxprix .prixrabais, #boxprix2 .prixrabais": {
    fontSize: "1em",
    lineHeight: "0.5em",
    fontFamily: "'font_black', Arial, Helvetica, sans-serif",
    margin: "0 0 0.5em 0",
    padding: "0"
  },
  "#boxprix .derabais, #boxprix2 .derabais": {
    fontSize: "0.55em",
    lineHeight: "0.5em",
    fontFamily: "'font_black', Arial, Helvetica, sans-serif",
    margin: "0",
    padding: "0",
    textTransform: "uppercase"
  },
  "#boxprix .prixgauche span, #boxprix2 .prixgauche span": {
    fontSize: "0.75em",
    lineHeight: "0.15em",
    textTransform: "uppercase",
    padding: "0",
    margin: "0"
  },
  "#boxprix .sectadd, #boxprix2 .sectadd": {
    fontSize: "1em",
    lineHeight: "1em",
    textTransform: "uppercase",
    marginTop: "1em"
  },
  "#boxprix .type_paiements, #boxprix2 .type_paiements": {
    margin: "auto",
    marginTop: "1em",
    padding: "0",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    width: "90%"
  },
  "#boxprix .type_paiements h3, #boxprix2 .type_paiements h3": {
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    margin: "0 0 0.15em 0"
  },
  "#boxprix img, #boxprix2 img": {},
  "#boxprix .calculatrice": {
    display: "inline-block",
    width: "7em",
    height: "auto",
    margin: "auto",
    marginTop: "2em"
  },
  "#boxprix .calculatrice img": { width: "100%", height: "auto" },
  "#facebox": {
    position: "absolute",
    width: "100%",
    top: "0",
    left: "0",
    zIndex: 10,
    textAlign: "left"
  },
  "#facebox .popup": { position: "relative" },
  "#facebox table": { margin: "auto", borderCollapse: "collapse" },
  "#facebox .body": {
    padding: "1em",
    background: "#FFF",
    width: "100%",
    borderBottom: "1px solid #E3ECF3"
  },
  "#facebox .loading": { textAlign: "center" },
  "#facebox .image": { textAlign: "center" },
  "#facebox img": { border: "0", width: "auto" },
  "#facebox img.close_image": { width: "3.5em", height: "3.5em" },
  "#facebox .footer": {
    paddingTop: "5px",
    marginTop: "0px",
    textAlign: "right"
  },
  "#facebox .tl, #facebox .tr, #facebox .bl, #facebox .br": {
    height: "10px",
    width: "10px",
    overflow: "hidden",
    padding: "0"
  },
  ".mwidth_adh": { width: "85%", margin: "auto" },
  ".bg_form_adhesion_reseau": {
    cssFloat: "left",
    width: "100%",
    background:
      "#0E7AB9 url(../img/ico-left-adhesion.svg) no-repeat 3.35em 8.5em",
    backgroundSize: "15em"
  },
  "#form_adhesion_reseau": {
    width: "75%",
    cssFloat: "right",
    background: "#dce6ef",
    borderTop: "1px solid #E3ECF3",
    color: "#455560"
  },
  "#form_adhesion_reseau .box3": {
    cssFloat: "left",
    width: "auto",
    padding: "4em 0"
  },
  "#form_adhesion_reseau label.note": {
    background: "#35424A",
    color: "#FFFFFF",
    padding: "1em 1em 1em 0.5em",
    width: "92%"
  },
  "#form_adhesion_reseau .col_adh1": {
    cssFloat: "left",
    width: "98%",
    padding: "0 2% 0 0"
  },
  "#form_adhesion_reseau .col_adh2": {
    cssFloat: "left",
    width: "98%",
    padding: "0 1% 0 1%"
  },
  "#form_adhesion_reseau .col_adh3": {
    cssFloat: "left",
    width: "98%",
    padding: "0 0 0 2%"
  },
  "#form_adhesion_reseau p": {
    fontSize: "0.7em",
    lineHeight: "1.1em",
    color: "#748794",
    letterSpacing: "0.025em",
    fontFamily: "'font_black', sans-serif, Arial",
    padding: "0",
    margin: "0.5em 0"
  },
  "#form_adhesion_reseau p#adhnote": {
    fontSize: "0.75em",
    lineHeight: "1.25em",
    color: "#748794",
    letterSpacing: "0.025em",
    fontFamily: "'font_black', sans-serif, Arial",
    padding: "0",
    width: "90%",
    margin: "auto",
    textAlign: "center",
    marginTop: "0em",
    marginBottom: "2em"
  },
  "#form_adhesion_reseau  .dashedbdr": {
    border: "1px dashed #A1B2BE",
    width: "100%",
    cssFloat: "left",
    padding: "1.25em 0em 1.25em 0em",
    MozBorderRadius: "0.6em",
    WebkitBorderRadius: "0.6em",
    borderRadius: "0.6em",
    marginBottom: "1em",
    background: "#FFF"
  },
  "#form_adhesion_reseau  .dashedbdr .left": {
    cssFloat: "left",
    width: "10%",
    padding: "0 0% 0 3%"
  },
  "#form_adhesion_reseau  .dashedbdr .right": {
    cssFloat: "left",
    width: "83%",
    padding: "0 0% 0 2%"
  },
  "#form_adhesion_reseau  .ico_adhesion": {
    margin: "auto",
    background:
      "#0E7AB9 url(../img/ico-btn-adhesion.svg) no-repeat center center",
    backgroundSize: "6em",
    MozBorderRadius: "50%",
    WebkitBorderRadius: "50%",
    borderRadius: "50%",
    width: "5em",
    height: "5em"
  },
  "#form_adhesion_reseau a": { color: "#0DA2F2" },
  "#form_adhesion_reseau h3": {
    fontSize: "1.85em",
    lineHeight: "1em",
    display: "inline-block",
    padding: "0",
    margin: "0.45em 0 0 0",
    letterSpacing: "-0.025em"
  },
  "#form_adhesion_reseau h4": {
    fontSize: "0.95em",
    display: "inline-block",
    padding: "0",
    fontFamily: "'font_blackita', sans-serif, Arial",
    color: "#0E7AB9"
  },
  "#form_adhesion_reseau li": {
    width: "90%",
    margin: ["auto", "0"],
    padding: "0"
  },
  "#form_adhesion_reseau li div": {
    width: "100%",
    margin: "0em 0 0.5em 0",
    borderBottom: "1px dashed #A1B2BE",
    padding: "0 0.8em 0.5em 0"
  },
  "#form_adhesion_reseau li div.nobdr": {
    width: "100%",
    margin: "0",
    border: "none",
    padding: "0"
  },
  "#form_adhesion_reseau span.small": {
    fontSize: "0.75em",
    lineHeight: "0.6em",
    margin: "0.75em 0 0 0",
    padding: "0",
    fontFamily: "'font_blackita', sans-serif, Arial"
  },
  "#form_adhesion_reseau .selectRegion2": {
    height: "1.25em",
    margin: "0.25em 0 0 0",
    border: "none",
    fontSize: "0.85em"
  },
  "#form_adhesion_reseau .selectRegion2 select": {
    background: "transparent",
    border: "none",
    padding: "0",
    margin: "0",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    cursor: "pointer"
  },
  "#form_adhesion_reseau .selectRegion2.slate": {
    background: "#0DA2F2",
    width: "100%",
    MozBorderRadius: "0.35em",
    WebkitBorderRadius: "0.35em",
    borderRadius: "0.35em",
    textAlign: "left"
  },
  "#form_adhesion_reseau .selectRegion2.slate select": {
    fontSize: "0.9em",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    color: "#FFFFFF",
    width: "101.5%",
    padding: "0.1em 0 0 0.5em",
    height: "1.5em",
    background: "#0DA2F2 url(../img/ico-fleche.svg) no-repeat",
    backgroundPosition: "right 0.2em",
    backgroundSize: "1.2em",
    margin: "0.25em 0"
  },
  "#form_adhesion_reseau .selectRegion2 select:hover, #form_adhesion_reseau .selectRegion2 select:focus": {
    color: "#FFFFFF"
  },
  "#form_adhesion_reseau .selectRegion3": {
    height: "1.25em",
    margin: "0.25em 0 0 0",
    border: "none",
    fontSize: "0.85em"
  },
  "#form_adhesion_reseau .selectRegion3 select": {
    background: "transparent",
    border: "none",
    padding: "0",
    margin: "0",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    cursor: "pointer"
  },
  "#form_adhesion_reseau .selectRegion3.slate": {
    background: "#0E7AB9",
    width: "100%",
    MozBorderRadius: "0.35em",
    WebkitBorderRadius: "0.35em",
    borderRadius: "0.35em",
    textAlign: "left"
  },
  "#form_adhesion_reseau .selectRegion3.slate select": {
    fontSize: "0.9em",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    color: "#FFFFFF",
    width: "101.5%",
    padding: "0.1em 0 0 0.5em",
    height: "1.5em",
    background: "#0E7AB9 url(../img/ico-fleche.svg) no-repeat",
    backgroundPosition: "right 0.2em",
    backgroundSize: "1.2em",
    margin: "0.25em 0"
  },
  "#form_adhesion_reseau .selectRegion3 select:hover, #form_adhesion_reseau .selectRegion2 select:focus": {
    color: "#FFF"
  },
  "#form_contact .selectRegion2": {
    height: "1.25em",
    margin: "0.25em 0 0 0",
    border: "none",
    fontSize: "0.85em"
  },
  "#form_contact .selectRegion2 select": {
    background: "transparent",
    border: "none",
    padding: "0",
    margin: "0",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    cursor: "pointer"
  },
  "#form_contact .selectRegion2.slate": {
    background: "#212121",
    width: "100%",
    MozBorderRadius: "0.35em",
    WebkitBorderRadius: "0.35em",
    borderRadius: "0.35em",
    textAlign: "left"
  },
  "#form_contact .selectRegion2.slate select": {
    fontSize: "0.9em",
    fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
    color: "#FFFFFF",
    width: "101.5%",
    padding: "0.1em 0 0 0.5em",
    height: "1.5em",
    background: "#212121 url(../img/ico-fleche.svg) no-repeat",
    backgroundPosition: "right 0.2em",
    backgroundSize: "1.2em",
    margin: "0.25em 0"
  },
  "#form_contact .selectRegion2 select:hover, #form_contact .selectRegion2 select:focus": {
    color: "#FFFFFF"
  },
  '#form_adhesion_reseau input[type="text"], #form_adhesion_reseau input[type="tel"], #form_adhesion_reseau input[type="email"], #form_adhesion_reseau textarea': {
    fontFamily: "'font_bold', sans-serif, Arial",
    fontSize: "0.7em",
    color: "#455560",
    margin: "0",
    padding: "0.5em 2% 0.5em 0.5em",
    width: "100%",
    border: "none",
    display: "inline-block",
    background: "#FFF",
    MozBorderRadius: "0.45em",
    WebkitBorderRadius: "0.45em",
    borderRadius: "0.45em"
  },
  "#form_adhesion_reseau textarea": {
    width: "100%",
    height: "8em",
    overflow: "hidden"
  },
  "#form_adhesion_reseau textarea:focus": { height: "auto", overflow: "auto" },
  'input[type="text"]:hover,  input[type="tel"]:hover, input[type="email"]:hover, textarea:hover': {
    background: "#0DA2F2 !important",
    color: "#fff !important"
  },
  'input[type="text"]:focus,   input[type="tel"]:focus,   input[type="email"]:focus, textarea:focus': {
    background: "#0DA2F2 !important",
    color: "#fff !important"
  },
  "#form_adhesion_reseau .heures_affaires label": {
    marginTop: "0.25em",
    width: "50%",
    cssFloat: "left"
  },
  "#form_adhesion_reseau .heures_affaires label span": { width: "100%" },
  '#form_adhesion_reseau .heures_affaires input[type="text"]': {
    margin: "0.25em 0 0 0",
    width: "90%",
    display: "inline-block",
    padding: "0.5em 0 0.5em 0.5em"
  },
  '#form_adhesion_reseau .motscles input[type="text"]': {
    margin: "0.25em 0 0 0",
    width: "45%",
    display: "inline-block",
    padding: "0.5em 0 0.5em 0.5em"
  },
  "#form_adhesion_reseau p.refer": {
    fontSize: "0.55em",
    lineHeight: "1.1em",
    fontFamily: "'font_blackita', sans-serif, Arial",
    textTransform: "none"
  },
  ".q1 div, .q2 div, .q3 div, .q4 div, .q5 div, .q6 div, .q7 div, .q8 div, .q9 div, .q10 div": {
    cursor: "pointer",
    padding: "0",
    margin: "0"
  },
  "div.r1, div.r2, div.r3, div.r4, div.r5, div.r6, div.r7, div.r8, div.r9, div.r10": {
    display: "none",
    padding: "0",
    margin: "0"
  },
  "#form_adhesion_reseau div.r3 h2, #form_adhesion_reseau div.r4 h2, #form_adhesion_reseau div.r5 h2": {
    padding: "0.5em 0 0 0em",
    margin: "auto",
    fontSize: "1em",
    width: "100%"
  },
  "#form_adhesion_reseau div.r3 ul, #form_adhesion_reseau div.r4 ul, #form_adhesion_reseau div.r5 ul": {
    padding: "0",
    margin: "auto",
    width: "100%",
    display: "block",
    borderRadius: "0.3em"
  },
  "#form_adhesion_reseau div.r3 li, #form_adhesion_reseau div.r4 li, #form_adhesion_reseau div.r5 li": {
    padding: "0",
    margin: "0",
    width: "100%"
  },
  ".option-input": {
    fontSize: "0.7em",
    WebkitAppearance: "none",
    MozAppearance: "none",
    msAppearance: "none",
    OAppearance: "none",
    appearance: "none",
    top: "0.5em",
    width: "1.5em",
    height: "1.5em",
    background: "#ccd5db",
    color: "#fff",
    cursor: "pointer",
    display: "inline-block",
    outline: "none",
    position: "relative",
    marginRight: "0.5em",
    zIndex: 10,
    border: "1px solid #fff"
  },
  ".option-input:hover": { background: "#A1B2BE" },
  ".option-input:checked": { background: "#0DA2F2", border: "none" },
  ".option-input:checked::before": {
    width: "1.5em",
    height: "1.5em",
    position: "absolute",
    content: "'\\2716'",
    display: "inline-block",
    fontSize: "1em",
    textAlign: "center",
    lineHeight: "1.5em"
  },
  ".option-input:checked::after": {
    background: "#40e0d0",
    content: "''",
    display: "block",
    position: "relative",
    zIndex: 5
  },
  ".option-input.radio": { borderRadius: "50%" },
  ".option-input.radio::after": { borderRadius: "50%" },
  "#form_adhesion_reseau .checkboxpad": {
    display: "inline-block",
    width: "85%",
    verticalAlign: "middle"
  },
  "#form_adhesion_reseau .modepaiement.box": {
    background: "#fff",
    padding: "0.5em 0.5em 1em 0.5em",
    margin: "0",
    width: "98.5%",
    border: "none",
    display: "block"
  },
  "#form_adhesion_reseau .modepaiement label": {
    width: "49%",
    display: "inline-block",
    verticalAlign: "top"
  },
  "#form_adhesion_reseau .modepaiement label span": { fontSize: "0.75em" },
  "#form_adhesion_reseau .modepaiement label img": {
    height: "1em",
    width: "auto",
    display: "inline-block",
    padding: "0.5em 0",
    verticalAlign: "middle"
  },
  "#form_adhesion_reseau .modepaiement label img#visa": { height: "0.75em" },
  "#form_adhesion_reseau .modepaiement label img#mc": { height: "1.25em" },
  "#form_adhesion_reseau .modepaiement label img#amex": {
    height: "1.75em",
    padding: "0"
  },
  "#form_adhesion_reseau .modepaiement label img#paypal": { height: "1em" },
  "#form_adhesion_reseau .modepaiement label img#interac": {
    height: "1.9em",
    padding: "0.25em 0"
  },
  "#form_adhesion_reseau .modepaiement label img#accord": {
    height: "1.75em",
    padding: "0.25em 0"
  },
  "#form_adhesion_reseau .bg_blanc.box": {
    background: "#FFFFFF",
    padding: "0.5em 0em 0.75em 0.5em"
  },
  "#form_adhesion_reseau label": { display: "block", cursor: "pointer" },
  "#form_adhesion_reseau label span": {
    fontSize: "0.7em",
    fontFamily: "'font_blackita', sans-serif, Arial",
    width: "50%",
    display: "inline-block",
    verticalAlign: "middle"
  },
  "#form_adhesion_reseau .code_verif": {
    width: "90%",
    margin: "auto",
    padding: "0",
    textAlign: "center",
    marginTop: "1.5em"
  },
  '#form_adhesion_reseau .code_verif input[type="text"]': {
    width: "4em",
    display: "inline-block",
    position: "relative",
    fontSize: "1.15em",
    margin: "0 0 0 0.25em"
  },
  "#form_adhesion_reseau .code_verif img": {
    background: "#FFF",
    display: "inline-block",
    cursor: "pointer",
    padding: "0.25em",
    margin: "0.5em 0"
  },
  "#form_adhesion_reseau div.ico_client": {
    display: "block",
    width: "100%",
    margin: "0.25em 0 0 0",
    padding: "0 0.3em",
    border: "none",
    background: "#fff",
    textAlign: "center"
  },
  "#form_adhesion_reseau div.ico_client img": {
    width: "auto",
    margin: "0.75em 0",
    height: "6em"
  },
  "#form_adhesion_reseau .term_cond": {
    margin: "auto",
    padding: "0.25em 0em 0.75em 0.5em",
    width: "13.5em",
    fontFamily: "'font_blackita', sans-serif, Arial",
    marginTop: "1em",
    marginBottom: "1.5em",
    background: "#FFF",
    textAlign: "left"
  },
  "#form_adhesion_reseau .term_cond label": { width: "100%" },
  "#form_adhesion_reseau .term_cond span": {
    fontSize: "0.75em",
    lineHeight: "0.75em",
    width: "80%"
  },
  '#form_adhesion_reseau input[type="button"].adresse': {
    backgroundColor: "#0DA2F2",
    color: "#FFFFFF"
  },
  '#form_adhesion_reseau input[type="button"].adresse:hover': {
    backgroundColor: "#0DA2F2",
    color: "#FFF"
  },
  "#form_adhesion_reseau .logos_pro": {
    cssFloat: "left",
    display: "block",
    margin: "0",
    padding: "0 0 0.5em 0",
    width: "105.5%"
  },
  "#form_adhesion_reseau .logos_pro label": {
    background: "#FFFFFF",
    margin: "0 2% 0.25em 0",
    padding: "0",
    width: "48%",
    cssFloat: "left"
  },
  "#form_adhesion_reseau .logos_pro label img": {
    verticalAlign: "middle",
    height: "1.65em",
    width: "auto",
    margin: "0.25em"
  },
  "#form_adhesion_reseau .logos_pro label .option-input": {
    margin: "0 0.25em 0 0.5em",
    padding: "0"
  },
  "#termes_conditions": {
    width: "70%",
    margin: "auto",
    marginTop: "2em",
    padding: "0",
    letterSpacing: "normal"
  },
  "#termes_conditions ul": { paddingLeft: "2em", marginBottom: "1em" },
  "#termes_conditions li": {
    listStyle: "disc",
    textTransform: "uppercase",
    fontSize: "0.65em",
    lineHeight: "2em"
  },
  "#termes_conditions h1": {
    fontSize: "1.5em",
    textAlign: "center",
    marginBottom: "1.5em"
  },
  "#termes_conditions h2": {
    fontSize: "0.85em",
    margin: "1em 0 0.25em 0",
    fontFamily: "'font_bold', sans-serif, Arial"
  },
  "#termes_conditions p": {
    fontSize: "0.65em",
    lineHeight: "1.5em",
    marginBottom: "2em"
  },
  "#termes_conditions p a": { color: "#455560", textDecoration: "underline" },
  "#termes_conditions p a:hover": { color: "#455560", textDecoration: "none" },
  ".box_terms": { margin: "4em 0" },
  ".google_logos": {
    background: "#FFFFFF",
    margin: "auto",
    padding: "1em 0 0 0",
    marginTop: "1em",
    textAlign: "center",
    width: "22em"
  },
  ".google_logos img": { width: "auto", height: "6em", margin: "0 0.5em" },
  "@media screen and (max-width:319px)": {
    ".reznull": { display: "block" },
    body: { background: "#FFF", fontSize: "0.65em", opacity: 0.1 },
    ".mwidth": { width: "90%" }
  },
  "@media screen and (min-width:320px) and (max-width:359px)": {
    ".rez320": { display: "block" },
    ".mwidth": { width: "90%" },
    ".col1.regions": {
      backgroundSize: "8.5em",
      backgroundPosition: "105% 2.5em"
    },
    ".box_regions": { padding: "2em 6em 0.5em 2em" },
    ".pregions .col_client3": { width: "auto" },
    ".client": { padding: "2em 2em 0em 2em", border: "none", margin: "0" },
    ".client li": { width: "100%", height: "auto" },
    ".client li a": { padding: "0em 0 0.8em 0", display: "block" },
    ".client li a img": { width: "auto", height: "auto" },
    ".nouv_insc": {
      padding: "1em 1.77em 2em 1.77em",
      border: "none",
      margin: "0"
    },
    ".nouv_insc h2": { fontSize: "0.9em" },
    ".icoexclusif": { marginTop: "4.25em" },
    ".icoexclusif2": { marginTop: "4.5em" },
    ".btnexclusif": { cssFloat: "left" },
    ".selectmRegion  p": { marginBottom: "2em" },
    ".autofitimg img": { margin: "-22% 0 0% 0" },
    ".box_contact .serv_client .btn_tel, .box_contact .serv_client .btn_eml": {
      width: "auto"
    },
    ".box_contact .contact_logo": {
      letterSpacing: "0.01em",
      fontSize: "1.25em",
      lineHeight: "0.5em"
    },
    ".box_contact .serv_client ul": { width: "100%" },
    ".box_contact": { width: "100%" },
    ".box_contact .serv_client li": { height: "auto", margin: "1em 0 0 0" },
    ".box_partage_content": { left: "0.5em", maxWidth: "17.5em" },
    ".box_partage .smedia": { width: "auto" },
    ".fadeImg": { height: "9.5em" },
    ".logopng": { padding: "4.25em 0 0em 0" }
  },
  "@media screen and (min-width:360px) and (max-width:479px)": {
    ".rez360": { display: "block" },
    ".mwidth": { width: "85%" },
    ".col1.regions": {
      backgroundSize: "8.5em",
      backgroundPosition: "100% 2.5em"
    },
    ".box_regions": { padding: "2em 6em 0.5em 2em" },
    ".client": { padding: "2em 2em 0em 2em", border: "none", margin: "0" },
    ".client li": { width: "100%", height: "auto" },
    ".client li a": { padding: "0em 0 0.8em 0", display: "block" },
    ".client li a img": { width: "auto", height: "auto" },
    ".nouv_insc": {
      padding: "1em 1.5em 2em 1.5em",
      border: "none",
      margin: "0"
    },
    ".nouv_insc h2": { fontSize: "0.9em" },
    ".icoexclusif": { marginTop: "5.5em" },
    ".icoexclusif2": { marginTop: "5.25em" },
    ".btnexclusif": { cssFloat: "left" },
    ".selectmRegion.slate": { width: "82%" },
    ".selectmRegion  p": { marginBottom: "2em" },
    ".autofitimg img": { margin: "-22% 0 0% 0" },
    ".box_contact .serv_client .btn_tel, .box_contact .serv_client .btn_eml": {
      width: "auto"
    },
    ".box_contact .contact_logo": {
      letterSpacing: "0.01em",
      fontSize: "1.25em",
      lineHeight: "0.5em"
    },
    ".box_contact .serv_client ul": { width: "100%" },
    ".box_contact": { width: "100%" },
    ".box_contact .serv_client li": { height: "auto", margin: "1em 0 0 0" },
    ".box_partage_content": { left: "0.5em", maxWidth: "19.75em" },
    ".box_partage .smedia": { width: "auto" },
    ".fadeImg": { height: "11em" },
    ".logopng": { padding: "5.25em 0 0em 0" }
  },
  "@media screen and (min-width:480px) and (max-width:639px)": {
    ".rez480": { display: "block" },
    ".mwidth": { width: "90%" },
    ".col1.regions": {
      background: "#0E7AB9 url(../img/ico-map.svg) no-repeat",
      backgroundSize: "7em",
      backgroundPosition: "96% 2em"
    },
    ".box_regions": { padding: "2em 6em 1.25em 2em" },
    ".client": { padding: "2em 1em 0em 1em", border: "none", margin: "0" },
    ".client li": { width: "50%", height: "3.25em" },
    ".client li a": { padding: "0em 1em 0.8em 1em", display: "block" },
    ".nouv_insc": {
      padding: "2em 1.8em 3em 1.8em",
      border: "none",
      margin: "0"
    },
    ".nouv_insc li": { width: "33.333%", fontSize: "1.25em" },
    ".icoexclusif": { marginTop: "4.5em", fontSize: "0.5em" },
    ".icoexclusif2": { marginTop: "5.75em", fontSize: "0.75em" },
    ".btnexclusif": { fontSize: "0.75em" },
    ".selectmRegion.slate": { width: "90%" },
    ".box_contact .serv_client .btn_tel, .box_contact .serv_client .btn_eml": {
      width: "auto"
    },
    ".box_contact .contact_logo": {
      letterSpacing: "0.01em",
      fontSize: "1.25em",
      lineHeight: "0.5em"
    },
    ".box_contact .serv_client ul": { width: "100%" },
    ".box_contact": { width: "100%" },
    ".box_contact .serv_client li": { height: "auto", margin: "1em 0 0 0" },
    ".box_partage_content": { left: "0.5em" },
    ".box_partage .smedia": { width: "auto" },
    ".fadeImg": { height: "12.5em" },
    ".logopng": { padding: "5.5em 0 0em 0" }
  },
  "@media screen and (min-width:640px) and (max-width:767px)": {
    ".rez640": { display: "block" },
    ".mwidth": { width: "90%" },
    ".col1.regions": {
      background: "#0E7AB9 url(../img/ico-map.svg) no-repeat",
      backgroundSize: "7em",
      backgroundPosition: "96% 2em"
    },
    ".box_regions": { padding: "2.5em 17em 0.75em 2.5em" },
    ".client": { padding: "2em 1em 0em 1em", border: "none", margin: "0" },
    ".client li": { width: "50%", height: "4.7em" },
    ".client li a": { padding: "0em 1em 0.8em 1em", display: "block" },
    ".nouv_insc": {
      padding: "2em 1.25em 3em 1.45em",
      border: "none",
      margin: "0"
    },
    ".nouv_insc h2": { fontSize: "1em" },
    ".nouv_insc li": { width: "33.333%", fontSize: "1.25em" },
    ".icoexclusif": { marginTop: "6em" },
    ".icoexclusif2": { marginTop: "6.75em", fontSize: "0.9em" },
    ".btnexclusif": { fontSize: "1em" },
    ".selectmRegion.slate": { width: "90%" },
    ".box_contact .serv_client .btn_tel, .box_contact .serv_client .btn_eml": {
      width: "100"
    },
    ".box_contact .contact_logo": {
      letterSpacing: "0.01em",
      fontSize: "1.25em",
      lineHeight: "0.5em"
    },
    ".box_contact .serv_client ul": { width: "100%" },
    ".box_contact": { width: "100%" },
    ".box_contact .serv_client li": { height: "auto", margin: "1em 0 0 0" },
    ".box_partage_content": { left: "0.5em" },
    ".box_partage .smedia": { width: "auto" },
    ".fadeImg": { height: "14.5em" },
    ".logopng": { padding: "5.75em 0 0em 0" }
  },
  "@media screen and (min-width:768px) and (max-width:1023px)": {
    ".rez768": { display: "block" },
    ".rez #dimensions": { bottom: "1.5em" },
    ".modalw": { width: "90%" },
    "#modalbox .choix1, #modalbox .choix2": { width: "100%", margin: "0em 0" },
    "#modalbox .choix1": {
      borderRight: "none",
      borderBottom: "1px solid #999"
    },
    "#modalbox p": { padding: "2em 3em" },
    body: { fontSize: "1.35em" },
    ".mwidth": { width: "80%" },
    ".logo": {
      position: "fixed",
      left: "1.2em",
      top: "0.75em",
      fontSize: "1.25em"
    },
    ".logo img": { height: "3.5em", padding: "0.5em 0 0.5em 0" },
    ".menu_pad": {},
    ".selectRegion": { right: "12%", top: "0.9em" },
    ".selectRegion select": {
      background: "transparent",
      border: "none",
      padding: "0em",
      WebkitAppearance: "none",
      MozAppearance: "none",
      appearance: "none",
      cursor: "pointer"
    },
    ".selectRegion.slate": {
      background: "#0E7AB9",
      width: "10em",
      MozBorderRadius: "0.25em",
      WebkitBorderRadius: "0.25em",
      borderRadius: "0.25em",
      textAlign: "center"
    },
    ".selectRegion.slate select": {
      fontSize: "0.75em",
      fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
      color: "#FFF",
      width: "12.5em",
      padding: "0.1em 0",
      height: "1.75em",
      background: "#0E7AB9 url(../img/ico-map.svg) no-repeat center right",
      backgroundPosition: "11.2em 0.2em",
      backgroundSize: "1.45em",
      margin: "0.25em 0"
    },
    ".selectmRegion": { display: "block" },
    ".selectmRegion.slate": {
      width: "90%",
      marginBottom: "1.75em",
      fontSize: "1.25em"
    },
    ".bg": {
      width: "100%",
      height: "20em",
      background: "url(../img/411sante.jpg) no-repeat top center scroll",
      backgroundSize: "auto 100%"
    },
    ".rpcq h1": { fontSize: "1.2em" },
    ".logopng": {
      textAlign: "center",
      padding: "6.75em 0 0 0",
      width: "100%",
      margin: "auto"
    },
    ".fadeImg": { height: "17.5em" },
    'a.btn_std, .btn_tel_float, a.btn_tel, input[type="button"], input[type="submit"]': {
      display: "block",
      width: "auto"
    },
    "a.btn_tel": { width: "6.92em" },
    ".col1": { width: "100%" },
    ".col2": { width: "100%" },
    ".col3": { width: "100%" },
    ".column": { flex: "50%", maxWidth: "50%" },
    ".right .column": { flex: "100%", maxWidth: "100%" },
    ".col1.regions": {
      background: "#0E7AB9 url(../img/ico-map.svg) no-repeat",
      backgroundSize: "8em",
      backgroundPosition: "98% 1.5em"
    },
    ".box_regions": { padding: "2.5em 13em 0.75em 2.5em" },
    ".banniere_xtra": { width: "100%", paddingBottom: "0em" },
    ".client": { padding: "2em 1em 0em 1em", border: "none", margin: "0" },
    ".client li": { width: "50%", height: "4.75em" },
    ".client li a": { padding: "0em 0.75em 0.8em 0.75em", display: "block" },
    ".client li a img": { width: "100%", height: "auto" },
    ".nouv_insc": {
      padding: "2em 1.35em 3em 1.35em",
      border: "none",
      margin: "0"
    },
    ".nouv_insc h2": { fontSize: "1.5em" },
    ".nouv_insc li": { width: "25%", fontSize: "1em" },
    ".icoexclusif": { marginTop: "5.75em", fontSize: "0.5em" },
    ".icoexclusif2": { marginTop: "6.5em", fontSize: "0.5em" },
    ".btnexclusif": { fontSize: "0.6em" },
    ".regions_menu": { display: "none" },
    ".regions h1": {
      fontSize: "1.5em",
      lineHeight: "1.15em",
      paddingRight: "0.15em"
    },
    ".ancre": { marginTop: "-3.5em" },
    ".col_50": { width: "100%" },
    ".col_left_form, .col_right_form": { marginRight: "0.8em" },
    ".box_coor ul": { marginRight: "0", height: "auto" },
    footer: { fontSize: "0.6em" },
    "footer p": { padding: "0 5em 0 5em", letterSpacing: "0.05em" },
    ".autofitimg img": { margin: "-22% 0 0% 0" },
    ".pclient": { width: "100%" },
    ".pclient .box": { border: "none" },
    ".pclient .left": { width: "100%" },
    ".pclient .right": { width: "99.7%" },
    ".pclient .vsep": { border: "none" },
    ".pclient .boxbandeau": { width: "100%", padding: "0" },
    ".pclient .add": {
      fontSize: "1em",
      padding: "1em 0 1em 0",
      width: "96%",
      margin: "auto"
    },
    ".pclient h1": {
      fontSize: "1em",
      lineHeight: "1.3em",
      letterSpacing: "0.05em",
      padding: "0"
    },
    ".services ul": { margin: "1em 0em 4em 1em" },
    ".pclient .left .services ul, .pclient .right .services ul": {
      width: "85%",
      margin: "0",
      marginBottom: "0em"
    },
    ".services li": { width: "50%", margin: "0", padding: "0" },
    ".services h2": { padding: "1em", fontSize: "1.5em", textAlign: "center" },
    ".services h3": { padding: "0.25em 2em 0em 0em", fontSize: "1em" },
    ".horraire ul": { margin: "0 1em 0em 1em", padding: "5.5em 0 3em 0" },
    ".horraire h2": { fontSize: "1em", borderTop: "1px solid #E3ECF3" },
    ".box_pregions": { width: "100%" },
    ".pregions .list": { padding: "3em 0" },
    ".pregions .banniere_xtra": { width: "100%", paddingTop: "0em" },
    ".pregions .col_client1": { width: "24%", margin: "0" },
    ".pregions .col_client2": { width: "40%", margin: "0.5em 2% 0.5em 1%" },
    ".pregions .col_client3": {
      width: "29%",
      fontSize: "0.75em",
      margin: "0.5em 0 0 0"
    },
    ".pregions .box_client": {
      display: "block",
      width: "100%",
      margin: "0",
      padding: "0 0 0.75em 0"
    },
    ".pregions .box_client p": { fontSize: "0.75em" },
    ".pregions .box_client h3": { fontSize: "1em" },
    ".pregions .box_icons": { width: "auto", fontSize: "1.25em" },
    ".pregions .box_icons a.btn_tel": { width: "auto" },
    ".pregions .banniere a": {
      width: "95%",
      padding: "0.5em 0 0 5%",
      margin: "auto",
      display: "block",
      marginBottom: "0.5em"
    },
    ".pregions .banniere img": { width: "100%", height: "auto" },
    ".pregions p.exclusif": {
      fontSize: "0.9em",
      fontFamily: "'font_black', Arial, Helvetica, sans-serif"
    },
    ".box_contact": { width: "100%" },
    ".col_right_form": { padding: "0" },
    ".box_contact .contact_logo": {
      letterSpacing: "0.01em",
      fontSize: "2.75em",
      lineHeight: "0.5em"
    },
    ".box_contact .serv_client li": { height: "auto", width: "48%" },
    'input[type="button"], input[type="submit"]': {
      display: "block",
      width: "103.25%",
      fontSize: "1em"
    },
    "#form_adhesion": { width: "100%", marginTop: "8em" },
    "#form_adhesion .box1": { padding: "4em 0", width: "100%", margin: "auto" },
    ".bg_adhesion": {
      width: "100%",
      background:
        "#0E7AB9 url(../img/ico-left-adhesion.svg) no-repeat center 0.35em",
      backgroundSize: "7.5em"
    },
    ".box_annonceurs": {
      width: "100%",
      padding: "3em 0 2em 0",
      marginTop: "0em"
    },
    ".box_annonceurs h1": { fontSize: "2em", lineHeight: "1em" },
    ".box_annonceurs h2": {
      fontSize: "1.3em",
      lineHeight: "1.2em",
      width: "80%",
      margin: "auto",
      marginTop: "1em",
      marginBottom: "1.5em"
    },
    ".bg_annonceurs": {
      background:
        "#0E7AB9 url(../img/ico-left-annonceurs.svg) no-repeat top center",
      backgroundSize: "7em"
    },
    "#facebox img.close_image": { width: "2em", height: "2em" },
    ".bg_annonceurs a#cache": { height: "7em", width: "100%" },
    ".box_annonceurs h3": {
      fontSize: "0.7em",
      lineHeight: "1.2em",
      width: "80%",
      margin: "auto",
      fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
      marginTop: "1.5em"
    },
    ".box_annonceurs p": {
      fontSize: "0.6em",
      letterSpacing: "normal",
      width: "80%",
      margin: "auto",
      marginTop: "0.5em"
    },
    ".adhwidth": { width: "80%", margin: "auto" },
    "#boxprix .titre, #boxprix2 .titre": { fontSize: "1.25em" },
    "#boxprix  li ul li.prix_col0#haut, #boxprix2  li ul li.prix_col0#haut": {
      height: "8.5em"
    },
    "#boxprix  li ul li, #boxprix2  li ul li": { height: "2em" },
    "#boxprix, #boxprix2": { width: "100%", marginBottom: "3em" },
    "#boxprix h1, #boxprix2 h1": { fontSize: "1em" },
    "#boxprix  ul, #boxprix2  ul": {
      padding: "0",
      width: "100%",
      fontSize: "0.85em"
    },
    "#boxprix .rabais, #boxprix2 .rabais": {
      padding: "0.5em",
      marginTop: "0.75em",
      fontSize: "1.2em"
    },
    "#boxprix .bdr, #boxprix2 .bdr": { padding: "0 0 1em 0" },
    ".col_33": { width: "100%" },
    ".bg_form_adhesion_reseau": {
      width: "100%",
      background:
        "#0E7AB9 url(../img/ico-left-adhesion.svg) no-repeat center 0.3em",
      backgroundSize: "7.5em"
    },
    "#form_adhesion_reseau label.note": { width: "96%" },
    "#form_adhesion_reseau": { width: "100%", marginTop: "8em" },
    "#form_adhesion_reseau .box1": {
      padding: "4em 0",
      width: "100%",
      margin: "auto"
    },
    "#form_adhesion_reseau .box3": {
      cssFloat: "left",
      width: "auto",
      padding: "2em 0"
    },
    "#form_adhesion_reseau h2": { textAlign: "center" },
    "#form_adhesion_reseau h3": { textAlign: "center" },
    "#form_adhesion_reseau h4": { textAlign: "center", marginTop: "0.5em" },
    "#form_adhesion_reseau .col_adh1": { padding: "0" },
    "#form_adhesion_reseau .col_adh2": { padding: "0" },
    "#form_adhesion_reseau .col_adh3": { padding: "0" },
    "#form_adhesion_reseau li": { width: "96.5%" },
    "#form_adhesion_reseau  .dashedbdr .left": {
      width: "90%",
      padding: "0 5%",
      margin: "0"
    },
    "#form_adhesion_reseau  .dashedbdr .right": {
      width: "90%",
      padding: "0 5%",
      margin: "0"
    },
    ".mwidth_adh": { width: "85%" },
    "#form_adhesion_reseau span.small": {
      display: "block",
      marginTop: "0.15em",
      fontSize: "0.85em",
      lineHeight: "1em"
    },
    "#form_adhesion_reseau .selectRegion2.slate, #form_adhesion_reseau .selectRegion3.slate": {
      width: "100%",
      height: "1.25em",
      margin: "0.25em 0 0.25em 0",
      border: "none",
      fontSize: "1.25em"
    },
    "#form_contact .selectRegion2.slate, #form_adhesion_reseau .selectRegion3.slate": {
      width: "100%",
      height: "1.25em",
      margin: "0.25em 0 0.25em 0",
      border: "none",
      fontSize: "1.25em"
    },
    'input[type="button"].btn_envoyer': {
      width: "100%",
      margin: "auto",
      fontSize: "1em",
      height: "auto",
      padding: "0.75em 0"
    },
    ".boite_msg_contact": { fontSize: "1em", width: "auto" },
    ".google-maps": { height: "20em" },
    ".nozoom": { height: "20em", top: "20em", marginTop: "-20em" },
    ".box_partage": { height: "20em" },
    ".box_partage_content": { left: "3.25em", maxWidth: "27.75em" },
    ".box_partage .smedia": { width: "auto" }
  },
  "@media screen and (min-width:1024px) and (max-width:1279px)": {
    ".rez1024": { display: "block" },
    ".mwidth": { width: "70%" },
    ".bg": { backgroundAttachment: "scroll", backgroundSize: "auto 100%" },
    ".logo": { left: "6%" },
    ".selectRegion": { right: "6%" },
    ".col1.regions": {
      background: "#0E7AB9 url(../img/ico-map.svg) no-repeat",
      backgroundSize: "5em",
      backgroundPosition: "98% 7.25em"
    },
    ".box_regions": { padding: "2.5em 2em 0.75em 2.5em" },
    ".client": { padding: "2em 1em 0em 1em" },
    ".client li": { width: "50%", height: "4.75em" },
    ".client li a": { padding: "0em 0.75em 0.8em 0.75em", display: "block" },
    ".client li a img": { width: "100%", height: "auto" },
    ".nouv_insc": { padding: "2em 1em 0em 1em", border: "none", margin: "0" },
    ".icoexclusif": { marginTop: "4.5em", fontSize: "0.5em" },
    ".icoexclusif2": { marginTop: "5.25em" },
    footer: { fontSize: "0.75em" },
    "footer p": { padding: "0 5em 0 5em", letterSpacing: "0.05em" },
    ".pclient .boxbandeau": { width: "100%", padding: "0" },
    ".pclient .box": { border: "none" },
    ".pregions .col_client1": { width: "20%", margin: "0" },
    ".pregions .col_client2": {
      width: "44%",
      margin: "0em 1%",
      fontSize: "0.75em"
    },
    ".pregions .col_client3": { width: "20%", margin: "0" },
    ".pregions .box_icons": { fontSize: "1.25em" },
    ".pregions p": { fontSize: "1em" },
    ".serv_client": { fontSize: "0.85em" },
    ".bg_adhesion": {
      backgroundPosition: "0.75em center",
      backgroundSize: "15em"
    },
    ".bg_form_adhesion_reseau": {
      width: "100%",
      background:
        "#0E7AB9 url(../img/ico-left-adhesion.svg) no-repeat center 0.3em",
      backgroundSize: "7.5em"
    },
    "#form_adhesion_reseau": {
      width: "100%",
      marginTop: "6.25em",
      fontSize: "1.25em"
    },
    "#form_adhesion_reseau .box1": { padding: "4em 0", width: "100%" },
    "#form_adhesion_reseau .mwidth_adh": { width: "95%" },
    "#form_adhesion_reseau .dashedbdr": { fontSize: "0.95em" },
    ".box_partage .addthis_inline_share_toolbox": { minWidth: "14em" },
    ".fadeImg": { height: "31.5em" },
    ".logopng": { padding: "10.75em 0 0em 0" }
  },
  "@media screen and (min-width:1280px) and (max-width:1365px)": {
    ".rez1280": { display: "block" },
    ".mwidth": { width: "60%" },
    body: { fontSize: "1.1em" },
    ".bg": { backgroundAttachment: "scroll", backgroundSize: "auto 100%" },
    ".logo": { left: "12%" },
    ".selectRegion": { right: "12%" },
    ".icoexclusif": { marginTop: "5.25em", fontSize: "0.5em" },
    ".icoexclusif2": { marginTop: "6.5em" },
    ".col1.regions": {
      background: "#0E7AB9 url(../img/ico-map.svg) no-repeat",
      backgroundSize: "6em",
      backgroundPosition: "right 4em"
    },
    ".box_regions": { padding: "2.5em 3.75em 0.75em 2.5em" },
    ".client": { padding: "3em 2em 3em 2em" },
    ".client li": { width: "50%", height: "4em" },
    ".client li a": { padding: "0em 0.75em 0.8em 0.75em", display: "block" },
    ".client li a img": { width: "100%", height: "auto" },
    footer: { fontSize: "0.75em" },
    "footer p": { padding: "0 5em 0 5em", letterSpacing: "0.05em" },
    ".pclient .boxbandeau": { width: "100%", padding: "0" },
    ".pclient .box": { border: "none" },
    ".bg_adhesion": {
      backgroundPosition: "0.75em center",
      backgroundSize: "18em"
    },
    ".bg_form_adhesion_reseau": {
      width: "100%",
      background:
        "#0E7AB9 url(../img/ico-left-adhesion.svg) no-repeat center 0.3em",
      backgroundSize: "7.5em"
    },
    "#form_adhesion_reseau": {
      width: "100%",
      marginTop: "6.25em",
      fontSize: "1.25em"
    },
    "#form_adhesion_reseau .box1": { padding: "4em 0", width: "100%" },
    "#form_adhesion_reseau .mwidth_adh": { width: "95%" },
    ".pregions .col_client1": { width: "20%", margin: "0" },
    ".pregions .col_client2": {
      width: "54%",
      margin: "0em 1%",
      fontSize: "0.75em"
    },
    ".pregions .col_client3": { width: "20%", margin: "0" },
    ".box_partage .addthis_inline_share_toolbox": { minWidth: "14em" },
    ".fadeImg": { height: "35.5em" }
  },
  "@media screen and (min-width:1366px) and (max-width:1679px)": {
    ".rez1366": { display: "block" },
    ".mwidth": { width: "60%" },
    body: { fontSize: "1.15em" },
    ".client li a img": { width: "100%", height: "auto" },
    ".logo": { left: "12%" },
    ".selectRegion": { right: "12%" },
    ".icoexclusif": { marginTop: "5.5em", fontSize: "0.5em" },
    ".icoexclusif2": { marginTop: "5.75em", fontSize: "0.65em" },
    ".col1.regions": {
      background: "#0E7AB9 url(../img/ico-map.svg) no-repeat",
      backgroundSize: "6em",
      backgroundPosition: "right 4em"
    },
    ".box_regions": { padding: "2.5em 4em 0.75em 2.5em" },
    ".client": { padding: "3em 2em 3em 2em" },
    ".client li": { width: "50%", height: "4em" },
    ".client li a": { padding: "0em 0.75em 0.8em 0.75em", display: "block" },
    footer: { fontSize: "0.75em" },
    "footer p": { padding: "0 5em 0 5em", letterSpacing: "0.05em" },
    ".pclient .boxbandeau": { width: "100%", padding: "0" },
    ".pclient .box": { border: "none" },
    ".bg_adhesion": {
      backgroundPosition: "0.75em center",
      backgroundSize: "18em"
    },
    ".pregions .col_client1": { width: "20%", margin: "0" },
    ".pregions .col_client2": {
      width: "55%",
      margin: "0em 1%",
      fontSize: "0.75em"
    },
    ".pregions .col_client3": { width: "20%", margin: "0" },
    ".bg_form_adhesion_reseau": {
      width: "100%",
      background:
        "#0E7AB9 url(../img/ico-left-adhesion.svg) no-repeat center 0.3em",
      backgroundSize: "7.5em"
    },
    "#form_adhesion_reseau": {
      width: "100%",
      marginTop: "6.25em",
      fontSize: "1.25em"
    },
    "#form_adhesion_reseau .box1": { padding: "4em 0", width: "100%" },
    "#form_adhesion_reseau .mwidth_adh": { width: "90%" },
    ".box_partage .addthis_inline_share_toolbox": { minWidth: "19.5em" },
    ".box_partage .url a": { fontSize: "1.9em", marginTop: "0em" },
    ".fadeImg": { height: "36.5em" }
  },
  "@media screen and (min-width:1680px) and (max-width:1919px)": {
    ".rez1680": { display: "block" },
    body: { fontSize: "1.25em" },
    footer: { fontSize: "0.5em" },
    ".client li a img": { width: "100%", height: "auto" },
    ".bg_adhesion": { backgroundPosition: "1.3em center" },
    ".bg_form_adhesion_reseau": {
      backgroundPosition: "1.3em 10%",
      backgroundSize: "20em"
    },
    ".icoexclusif": { marginTop: "5.3em" },
    ".icoexclusif2": { marginTop: "5.4em" },
    ".box_partage .addthis_inline_share_toolbox": { minWidth: "18em" }
  },
  "@media screen and (min-width:1920px) and (max-width:2559px)": {
    ".rez1920": { display: "block" },
    body: { fontSize: "1.5em" },
    footer: { fontSize: "0.5em" }
  },
  "@media screen and (min-width:2560px) and (max-width:3839px)": {
    ".rez2560": { display: "block" },
    body: { fontSize: "2em" },
    footer: { fontSize: "0.5em" },
    ".google-maps iframe": { zoom: 1.5 },
    ".client li a img": { width: "100%", height: "auto" },
    ".box_partage .addthis_inline_share_toolbox": { minWidth: "22.75em" }
  },
  "@media screen and (min-width:3840px)": {
    ".rez3840": { display: "block" },
    ".rez #dimensions": { bottom: "0.75em", fontSize: "1em" },
    body: { fontSize: "3em" },
    ".rez3840 p": { fontSize: "0.5em" },
    footer: { fontSize: "0.5em" },
    ".google-maps iframe": { zoom: 2 },
    ".client li a img": { width: "100%", height: "auto" }
  },
  "@media screen and (min-width:320px) and (max-width:767px)": {
    ".rez #dimensions": { bottom: "1.75em" },
    ".modalw": { width: "90%" },
    "#modalbox .choix1, #modalbox .choix2": { width: "100%", margin: "0em 0" },
    "#modalbox .choix1": {
      borderRight: "none",
      borderBottom: "1px solid #999"
    },
    "#modalbox p": { padding: "1em 2em" },
    ".ancre": { marginTop: "-3.5em" },
    ".logo": { left: "0.75em", top: "0.75em", fontSize: "1.3em" },
    ".logo img": { height: "3.5em", padding: "0.5em 0 0.5em 0" },
    ".bg": {
      width: "100%",
      height: "20em",
      background: "url(../img/411sante.jpg) no-repeat top center scroll",
      backgroundSize: "auto 100%"
    },
    ".menu_pad": { display: "block", height: "0.1em" },
    h1: { fontSize: "1.5em", letterSpacing: "-0.015em" },
    h2: { fontSize: "1.5em", letterSpacing: "-0.015em" },
    h3: { fontSize: "1.1em", letterSpacing: "-0.005em" },
    h4: { fontSize: "0.75em", lineHeight: "1.2em" },
    'a.btn_std, .btn_tel_float, a.btn_tel, a.btn_eml, input[type="button"] , input[type="submit"]': {
      display: "block",
      width: "auto"
    },
    ".box_contact .serv_client a.btn_eml": {
      display: "block",
      width: "auto",
      padding: "0.15em 0.15em 0.4em 1.5em",
      fontSize: "1.25em"
    },
    ".box_contact .serv_client a.btn_eml span": { fontSize: "0.75em" },
    ".btn_tel_float": { fontSize: "0.75em" },
    ".col1": { width: "100%" },
    ".col2": { width: "100%" },
    ".col3": { width: "100%" },
    ".column": { flex: "100%", maxWidth: "100%" },
    ".right .column": { flex: "100%", maxWidth: "100%" },
    ".banniere_xtra": { width: "100%", paddingBottom: "0em" },
    ".client li a img": { width: "100%", height: "auto" },
    ".nouv_insc li a img": { width: "100%", height: "auto" },
    ".col_50": { width: "100%" },
    ".col_left_form, .col_right_form": { marginRight: "0.8em" },
    ".box_coor ul": {
      marginRight: "0",
      height: "auto",
      width: "auto",
      padding: "1.25em 0  1.25em 0",
      background: "none"
    },
    'input[type="text"],  input[type="tel"],  input[type="email"], textarea': {
      padding: "0.7em 0.4em 0.7em 0.4em"
    },
    ".google-maps": { height: "26em" },
    ".nozoom": { height: "26em", top: "26em", marginTop: "-26em" },
    ".box_partage": { height: "26em" },
    ".box_partage .url a": {
      fontSize: "1.25em",
      marginRight: "2em",
      marginTop: "0.2em"
    },
    ".box_partage .addthis_inline_share_toolbox": {
      minWidth: "14em",
      marginTop: "0.5em"
    },
    ".selectRegion": { display: "none" },
    ".selectmRegion": { display: "block" },
    ".selectmRegion  p": { marginBottom: "2em" },
    ".selectmRegion.slate select": { fontSize: "1.25em" },
    ".regions_menu": { display: "none" },
    ".rpcq h1": { fontSize: "1em", letterSpacing: "normal" },
    ".links": {
      textAlign: "center",
      padding: "2.5em 2em",
      fontFamily: "'font_bold', Arial, Helvetica, sans-serif"
    },
    ".shareicons": { fontSize: "1em" },
    ".box_contact .serv_client .box2": { border: "none" },
    ".box_contact .serv_client li": { width: "100%" },
    footer: { fontSize: "0.6em" },
    "footer p": {
      padding: "0.75em 0.5em 0.75em 0.5em",
      letterSpacing: "0.05em"
    },
    ".pclient": { width: "100%" },
    ".pclient .box": { border: "none" },
    ".pclient .left": { width: "100%" },
    ".pclient .right": { width: "100%", borderStyle: "none" },
    ".pclient .vsep": { border: "none" },
    ".pclient .boxbandeau": { width: "100%", padding: "0" },
    ".pclient .add": {
      fontSize: "1em",
      padding: "1em 0 1em 0",
      width: "96%",
      margin: "auto"
    },
    ".pclient h1": {
      fontSize: "1em",
      lineHeight: "1.3em",
      letterSpacing: "0.05em",
      padding: "0"
    },
    ".pclient .left .services h3, .pclient .right .services h3": {
      padding: "0em"
    },
    ".services ul": { margin: "1em 0em 4em 1em" },
    ".services li": { width: "100%", margin: "0", padding: "0" },
    ".services li p": { fontSize: "0.85em" },
    ".services h2": { padding: "1em", fontSize: "1.5em", textAlign: "center" },
    ".services h3": { padding: "2em 2em 0em 2em", fontSize: "1em" },
    ".horraire ul": {
      margin: "0 1em 0em 1em",
      padding: "1.5em 0 3em 0",
      fontSize: "1.25em"
    },
    ".horraire h2": { fontSize: "1em", borderTop: "none" },
    "a.btn_tel, a.btn_eml": {
      width: "auto",
      padding: "0.3em 1em 0.25em 1.5em"
    },
    "a.btn_eml": {
      background: "#0E7AB9 url(../img/ico-contact.svg) no-repeat 0.15em center",
      padding: "0.4em 0.2em 0.2em 1.5em",
      textAlign: "left",
      letterSpacing: "-0.03em",
      margin: "0 0 0.25em 0",
      backgroundSize: "1.25em"
    },
    "a.btn_eml:hover": {
      background: "#0E7AB9 url(../img/ico-contact.svg) no-repeat 0.15em center",
      backgroundSize: "1.25em"
    },
    ".box_pregions": { width: "100%" },
    ".pregions .banniere_xtra": { width: "100%", paddingTop: "0em" },
    ".pregions .toggle_regions .cache_texte .btn_ouvrir": { width: "auto" },
    ".pregions.top": { padding: "2em 1.5em 1em 1.5em" },
    ".pregions .list": { padding: "0em 0" },
    ".pregions h1": {
      fontSize: "1.5em",
      textAlign: "center",
      margin: "0 0 0.7em 0"
    },
    ".pregions .toggle_regions": { fontSize: "1em" },
    ".pregions .col_client1": { width: "40%", margin: "0" },
    ".pregions .col_client2": { width: "56%", margin: "0.5em 0 0.5em 1%" },
    ".pregions .col_client3": {
      width: "80%",
      margin: "0em 10%",
      textAlign: "center"
    },
    ".pregions .box_client": {
      display: "block",
      width: "100%",
      margin: "0",
      padding: "0 0 3em 0"
    },
    ".pregions .box_client p": { fontSize: "0.75em" },
    ".pregions .box_client h3": { fontSize: "1em" },
    ".pregions .box_icons": { width: "auto", fontSize: "1.25em" },
    ".pregions .box_icons a.btn_tel": { width: "auto" },
    ".pregions .banniere a": {
      width: "95%",
      padding: "0.5em 0 0 5%",
      margin: "auto",
      display: "block",
      marginBottom: "0.5em"
    },
    ".pregions .banniere img": { width: "100%", height: "auto" },
    ".pregions p.exclusif": {
      fontSize: "1em",
      fontFamily: "'font_black', Arial, Helvetica, sans-serif"
    },
    "#sect_actv": { width: "78%", margin: "auto" },
    "#sect_actv .select_actv": {
      height: "2em",
      margin: "0.25em 0 0 0",
      border: "none",
      fontSize: "1em",
      marginBottom: "1em"
    },
    "#sect_actv .select_actv.slate select": {
      fontSize: "1em",
      fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
      color: "#FFFFFF",
      width: "98%",
      padding: "0.1em 0 0 0.5em",
      height: "1.5em",
      background: "#0DA2F2 url(../img/ico-fleche.svg) no-repeat",
      backgroundPosition: "right 0.3em",
      backgroundSize: "1.2em",
      margin: "0.25em 0"
    },
    ".box_contact": { cssFloat: "left", width: "100%" },
    ".col_right_form": { padding: "0" },
    "#form_adhesion": { width: "100%", marginTop: "6em" },
    "#form_adhesion .box1": { padding: "4em 0", width: "100%", margin: "auto" },
    "#form_adhesion_reseau": { width: "100%", marginTop: "6em" },
    "#form_adhesion_reseau .box1": {
      padding: "4em 0",
      width: "100%",
      margin: "auto"
    },
    ".bg_adhesion": {
      width: "100%",
      background:
        "#0E7AB9 url(../img/ico-adhesion.svg) no-repeat center 0.35em",
      backgroundSize: "5.5em 5.5em"
    },
    ".box_annonceurs": {
      width: "100%",
      padding: "3em 0 2em 0",
      marginTop: "0em"
    },
    ".bg_annonceurs": {
      background:
        "#0E7AB9 url(../img/ico-left-annonceurs.svg) no-repeat top center",
      backgroundSize: "5em 5em"
    },
    "#facebox img.close_image": { width: "2em", height: "2em" },
    ".bg_annonceurs a#cache": { height: "5em", width: "100%" },
    ".box_annonceurs h1": { fontSize: "2em", lineHeight: "1em" },
    ".box_annonceurs h2": {
      fontSize: "1.3em",
      lineHeight: "1.2em",
      width: "80%",
      margin: "auto",
      marginTop: "1em",
      marginBottom: "1.5em"
    },
    ".box_annonceurs h3": {
      fontSize: "0.7em",
      lineHeight: "1.2em",
      width: "80%",
      margin: "auto",
      fontFamily: "'font_blackita', Arial, Helvetica, sans-serif",
      marginTop: "1.5em"
    },
    ".box_annonceurs p": {
      fontSize: "0.6em",
      letterSpacing: "normal",
      width: "80%",
      margin: "auto",
      marginTop: "0.5em"
    },
    ".adhwidth": { width: "80%", margin: "auto" },
    "#boxprix, #boxprix2": {
      width: "100%",
      margin: "auto",
      display: "inline-block"
    },
    "#boxprix .titre, #boxprix2 .titre": {
      fontSize: "1.25em",
      margin: "0.6em 0 0.3em 1em"
    },
    "#boxprix  ul, #boxprix2  ul": {
      padding: "0",
      width: "100%",
      fontSize: "0.8em",
      margin: "auto"
    },
    "#boxprix  li ul li, #boxprix2  li ul li": { height: "7em !important" },
    "#boxprix  li ul li.prix_col0#haut, #boxprix2  li ul li.prix_col0#haut": {
      height: "3em"
    },
    "#boxprix h1, #boxprix2 h1": { fontSize: "1em" },
    "#boxprix .rabais, #boxprix2 .rabais": {
      padding: "0.5em",
      marginTop: "0.75em",
      fontSize: "1.2em"
    },
    "#boxprix .bdr, #boxprix2 .bdr": { padding: "0.5em", border: "none" },
    "#boxprix img, #boxprix2 img": { width: "90%", marginBottom: "0em" },
    "#boxprix .type_paiements h3, #boxprix2 .type_paiements h3": {
      fontSize: "1em"
    },
    "#boxprix .sectadd, #boxprix2 .sectadd": {
      fontSize: "0.75em",
      lineHeight: "1.25em"
    },
    "#facebox img": {
      border: "0",
      width: "auto",
      height: "2.5em",
      paddingBottom: "2em"
    },
    ".bg_form_adhesion_reseau": {
      width: "100%",
      background:
        "#0E7AB9 url(../img/ico-left-adhesion.svg) no-repeat center top",
      backgroundSize: "6.25em"
    },
    ".col_33": { width: "100%" },
    "#form_adhesion_reseau label.note": { width: "95.5%" },
    "#form_adhesion_reseau .box3": {
      cssFloat: "left",
      width: "auto",
      padding: "2em 0"
    },
    "#form_adhesion_reseau h2": { textAlign: "center" },
    "#form_adhesion_reseau h3": { textAlign: "center" },
    "#form_adhesion_reseau h4": { textAlign: "center", marginTop: "0.5em" },
    "#form_adhesion_reseau .col_adh1": { padding: "0" },
    "#form_adhesion_reseau .col_adh2": { padding: "0" },
    "#form_adhesion_reseau .col_adh3": { padding: "0" },
    "#form_adhesion_reseau li": { width: "96.5%" },
    "#form_adhesion_reseau p": { fontSize: "1em", marginTop: "1em" },
    "#form_adhesion_reseau  .dashedbdr .left": {
      width: "90%",
      padding: "0 5%",
      margin: "0"
    },
    "#form_adhesion_reseau  .dashedbdr .right": {
      width: "90%",
      padding: "0 5%",
      margin: "0"
    },
    ".mwidth_adh": { width: "85%" },
    "#form_adhesion_reseau .selectRegion2": {
      height: "1.5em",
      margin: "0.25em 0 0 0",
      border: "none",
      fontSize: "1em"
    },
    "#form_contact .selectRegion2": {
      height: "1.5em",
      margin: "0.25em 0 0 0",
      border: "none",
      fontSize: "1em"
    },
    'input[type="button"], input[type="submit"]': {
      display: "block",
      width: "104.25%",
      fontSize: "1em"
    },
    '#form_adhesion_reseau input[type="text"], #form_adhesion_reseau input[type="tel"], #form_adhesion_reseau input[type="email"]': {
      fontSize: "1.1em"
    },
    "#form_adhesion_reseau textarea": { fontSize: "1em" },
    "#form_adhesion_reseau span.small": {
      display: "block",
      marginTop: "0.15em",
      fontSize: "0.85em",
      lineHeight: "1em"
    },
    "#form_adhesion_reseau .selectRegion2.slate, #form_adhesion_reseau .selectRegion3.slate": {
      width: "100.5%",
      height: "1.4em",
      margin: "0.25em 0 0.25em 0",
      border: "none",
      fontSize: "1.25em"
    },
    "#form_contact .selectRegion2.slate, #form_adhesion_reseau .selectRegion3.slate": {
      width: "100.5%",
      height: "1.4em",
      margin: "0.25em 0 0.25em 0",
      border: "none",
      fontSize: "1.25em"
    },
    "#form_adhesion_reseau .heures_affaires label": {
      width: "100%",
      marginTop: "0.75em"
    },
    '#form_adhesion_reseau .heures_affaires input[type="text"]': {
      width: "100%"
    },
    "#form_adhesion_reseau label span": { fontSize: "1em", lineHeight: "1em" },
    ".option-input": { fontSize: "1em" },
    "#form_adhesion_reseau p.refer": { fontSize: "0.85em" },
    "#form_adhesion_reseau .code_verif": {
      width: "100%",
      padding: "0",
      fontSize: "1.2em"
    },
    "#form_adhesion_reseau .term_cond": {
      padding: "0.25em 0em 1em 0.5em",
      width: "100%",
      marginTop: "1em",
      marginBottom: "1.5em",
      fontSize: "0.7em"
    },
    "#form_adhesion_reseau .term_cond span": {
      fontSize: "1.5em",
      lineHeight: "1em",
      width: "85%"
    },
    'input[type="button"].btn_envoyer, input[type="submit"].btn_envoyer': {
      width: "100%",
      margin: "auto",
      fontSize: "1em",
      height: "auto",
      padding: "0.75em 0"
    },
    ".boite_msg_contact": { fontSize: "1em", width: "auto" },
    "#termes_conditions": { width: "90%", margin: "auto", marginTop: "2em" },
    "#termes_conditions li": { fontSize: "0.85em" },
    "#termes_conditions h1": { fontSize: "1.65em" },
    "#termes_conditions h2": { fontSize: "1em" },
    "#termes_conditions p": { fontSize: "0.85em" },
    ".champobl": { fontSize: "0.8em" },
    ".promo": { width: "90%", margin: "auto" },
    ".boxpromo h1": {
      fontSize: "1.25em",
      lineHeight: "1.25em",
      display: "block",
      marginBottom: "0.15"
    },
    ".boxpromo h2": {
      fontSize: "1.25em",
      lineHeight: "1.25em",
      display: "block",
      marginBottom: "0.15"
    },
    ".boxpromo h3": {
      fontSize: "1.7em",
      lineHeight: "1.25em",
      display: "block",
      marginBottom: "0.15"
    },
    ".boxpromo h4": {
      fontSize: "1.6em",
      lineHeight: "1.25em",
      display: "block",
      marginBottom: "0.15"
    },
    ".boxpromo h5": {
      fontSize: "1.5em",
      lineHeight: "1.25em",
      display: "block",
      marginBottom: "0.15"
    },
    ".boxpromo h6": {
      fontSize: "1.4em",
      lineHeight: "1.25em",
      display: "block",
      marginBottom: "0.15"
    },
    ".pclient .left .client_info, .pclient .left .client_photo, .pclient .left .client_photo2, .pclient .left .client_photo3, .pclient .left .client_photo4, .pclient .left .equipe_info, .pclient .left .equipe_photo, .pclient .left .client_logo, .pclient .left .services": {
      padding: "2em 1.5em 1.5em 1.5em"
    },
    ".pclient .right .services, .pclient .right .client_info, .pclient .right .client_photo, .pclient .right .client_photo2, .pclient .right .client_photo3, .pclient .right .client_photo4, .pclient .right .equipe_info, .pclient .right .equipe_photo, .pclient .right .client_logo, .pclient .right .services": {
      padding: "2em 1.5em 1.5em 1.5em"
    },
    ".pclient .left .equipe_info li, .pclient .right .equipe_info li": {
      margin: "0.1em 0em",
      padding: "0.5em 3%",
      verticalAlign: "top",
      width: "100%"
    },
    ".pclient .left .services ul, .pclient .right .services ul": {
      width: "85%",
      margin: "0",
      marginBottom: "0em"
    },
    ".pclient .right .services ul": {
      margin: "0",
      width: "84%",
      fontSize: "1.25em"
    },
    ".pclient .right .equipe_info ul": { fontSize: "1.25em" },
    ".pclient .left .client_photo2 li, .pclient .left .client_photo2_f li": {
      width: "100%"
    },
    ".pclient .left .client_photo3 li, .pclient .left .client_photo3_f li": {
      width: "100%"
    },
    ".pclient .left .client_photo4 li, .pclient .left .client_photo4_f li": {
      width: "100%"
    },
    ".pclient .left .client_photo2_f li": { width: "50%" },
    ".pclient .left .client_photo3_f li": { width: "33.333%" },
    ".pclient .left .client_photo4_f li": { width: "50%" },
    ".pclient .right .equipe_photo li, .pclient .left .equipe_photo li": {
      width: "45%",
      padding: "0.5em 0.25em",
      textAlign: "center"
    },
    ".extreme": { margin: "2em 0 0 1em" }
  }
}
