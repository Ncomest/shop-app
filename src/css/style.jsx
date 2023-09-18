const flexStyles = {
 display: "flex",
};

const alignStyles = {
 alignItems: "center",
};

const justContStyles = {
 justifyContent: "center",
};

const flexDirStyles = {
 flexDirection: "column",
};

const colorGray = {
 color: "#6F6F6F",
};

const styles = {
 flex: flexStyles,
 align: alignStyles,
 justCont: justContStyles,

 flexAlign: {
  ...flexStyles,
  ...alignStyles,
 },

 flexJustContColm: {
  ...flexStyles,
  ...justContStyles,
  flexDirection: "column",
 },

 flexAlignJust: {
  ...flexStyles,
  ...alignStyles,
  ...justContStyles,
 },

 flexAlignJustColumn: {
  ...flexStyles,
  ...alignStyles,
  ...justContStyles,
  ...flexDirStyles,
 },

 flexAlignJustRow: {
  ...flexStyles,
  ...alignStyles,
  justifyContent: "row",
 },

 title: {
  fontSize: "32px",
  fontWeight: "600",
 },

 container: {
  display: "flex",
  flexDirection: "column",
 },

 aTC: {
  ...colorGray,
  paddingLeft: "10px",
 },

 addToCartBtn: {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "180px",
  margin: "auto",
  border: "1px solid #D7D7D7",
  borderRadius: "40px",
  backgroundColor: "#fff",
  cursor: "pointer",
 },

 circleHeart: {
  ...flexStyles,
  ...alignStyles,
  ...justContStyles,
  borderRadius: "50%",
  border: "1px solid #D7D7D7",
  width: "60px",
  height: "60px",
  backgroundColor: "#fff",
 },

 dicount: {
  ...flexStyles,
  ...alignStyles,
  ...justContStyles,
  backgroundColor: "#12A05C",
  color: "#fff",
  border: "1px solid #12A05C",
  borderRadius: "25px",
  width: "67px",
  height: "27px",
 },

 discountAndPopular: {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
 },

 blockCont: {
  ...flexStyles,
  ...alignStyles,
  ...justContStyles,
  padding: "0px 10px",
  margin: "0px 10px",
  flexDirection: "column",
  backgroundColor: "#dff0ff",
  width: "400px",
  height: "600px",
  cursor: "pointer",
 },

 gadgetModel: {
  ...flexStyles,
  ...alignStyles,
  ...justContStyles,
  paddingTop: "20px",
  marginBottom: "-10px",
 },

 priceModel: {
  ...flexStyles,
  ...alignStyles,
  justifyContent: "space-around",
  margin: "auto",
  width: "180px",
 },

 colorGray: {
  ...colorGray,
 },

 relProd: {
  display: "flex",
  alignItems: "center",
  justifyContent: "column",
  flexDirection: "column",
  margin: "240px 0px",
 },

 /*Footer*/

 footContainer: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "1920px",
  backgroundColor: "#2F333A",
  margin: "auto",
 },

 joinNews: {
  margin: "0px",
  color: "#fff",
  fontSize: "28px",
 },

 signIn: {
  color: "#fff",
  margin: "5px",
 },

 signContainer: {
  display: "flex",
  alignItems: "center",
  flex: "1 1 auto",
  justifyContent: "space-around",
  padding: "20px 0px",
  gap: "200px",
 },

 inputSign: {
  width: "450px",
  height: "70px",
 },

 inputBtn: {
  width: "270px",
  height: "70px",
  backgroundColor: "#E73C17",
  textTransform: "uppercase",
  color: "#fff",
  fontSize: "20px",
  fontWeight: "600",
  letterSpacing: "3px",
 },

 footBlock: {
  color: "#fff",
  gap: "100px",
  display: "flex",
  alignItems: "start",
  margin: "40px 0px",
 },

 aboutFoottext: {
  width: "360px",
 },

 Footh5: {
  fontSize: "24px",
  fontWeight: "500",
 },

 contWidth: {
  width: "345px",
  lineHeight: "2em",
 },

 footerMeta: {
  display: "flex",
  padding: "20px 0px",
  gap: "20px",
 },

 cardPos: {
  display: "flex",
  alignItems: "center",
  gap: "20px",
 },

 copyright: {
  display: "flex",
  justifyContent: "center",
  color: "#fff",
 },

 imgRec: {
  height: "100%",
  objectFit: "cover",
 },

 imgContainer: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "400px",
  height: "265px",
  overflow: "hidden",
  padding: "30px 0px",
 },

 cursorPointer: {
  cursor: "pointer",
 },

 colorMail: {
  color: "rgb(231, 60, 23)",
 },
};

export default styles;
