import React from "react";
import useMouse from "@react-hook/mouse-position";
import styles from "@dash-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";


let SATTAN = ''
let SELECT_SATTAN = ''

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     "& > *": {
//       margin: theme.spacing(1),
//       width: theme.spacing(16),
//       height: theme.spacing(16)
//     }
//   }
// }));
const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    overflow: "hidden",
    // "& > *": {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   height: theme.spacing(16)
    // }
  }
}));

let  FindPoint = (x1,y1,x2,y2,x,y) =>{
  if (x > x1 & x < x2 & y > y1 & y < y2) 
    return true; 

  return false; 
}

let selectionRemover = () =>{
  SELECT_SATTAN = ''
}

const SelectedRoom = (props) =>{
  console.log('debug',props.mouseData)

  let x_coord = props.mouseData.x
  let y_coord = props.mouseData.y
  let clicked = props.mouseData.isDown

  let placementArray = [
    {
      x1:0,
      y1:0,
      x2:130,
      y2: 90,
      name:'Laundry Room'
    },{
      x1:140,
      y1:4,
      x2:225,
      y2: 92,
      name:'Kitchen'
    }
    ,{
      x1:226,
      y1:4,
      x2:338,
      y2: 115,
      name:'Living and Dining'
    },{
      x1:400,
      y1:170,
      x2:620,
      y2: 366,
      name:'Office'
    },{
      x1:240,
      y1:168,
      x2:365,
      y2: 264,
      name:'Bedroom 2'
    },{
      x1:55,
      y1:213,
      x2:185,
      y2: 265,
      name:'Bedroom 1 '
    },{
      x1:50,
      y1:286,
      x2:190,
      y2: 362,
      name:'Bedroom 3 '
    },{
      x1:240,
      y1:270,
      x2:366,
      y2: 366,
      name:'Bedroom 4 '
    }
    ,{
      x1:99,
      y1:380,
      x2:172,
      y2: 487,
      name:'Entrance'
    },{
      x1:243,
      y1:373,
      x2:406,
      y2: 495,
      name:'Bedroom 5 (Two Person)'
    },{
      x1:444,
      y1:376,
      x2:616,
      y2: 517,
      name:''
    },{
      x1:113,
      y1:479,
      x2:170,
      y2: 530,
      name:'toilet'
    }
    
    
  ]
  placementArray.forEach(element => {
    if (FindPoint(element.x1,element.y1,element.x2,element.y2,x_coord,y_coord)){
      
      SATTAN = element.name
      

      if (clicked==true){
        SELECT_SATTAN = element.name
      }
      
      
    }else{
      SATTAN = ''
    }
    
  }
    );

  

  return (<>
  <h2>SELECTED  : {SELECT_SATTAN}</h2>
    
    <input type="button" value="Clear Selection" onClick={selectionRemover}/>
    
    
    </>
  )
}

export default function Predemo() {
  const imageGalleryClass = useStyles();
  const target = React.useRef(null);
  const mouse = useMouse(target, {
    fps: 60,
    enterDelay: 100,
    leaveDelay: 100
  });

  return (
    <div>
      

      <div>

        <Paper elevation={3}  theme={imageGalleryClass.root}>
        <img
          src="https://www.researchgate.net/profile/Susumu-Kunifuji/publication/29681554/figure/fig3/AS:669573997162511@1536650289871/Floor-map-of-Group-Home-Tomarigi.png"
          ref={target}
        />
        </Paper>
        
      </div>
      <br />
      <br />
      <br />
      <h1>RAW
        </h1>
      <div>{JSON.stringify(mouse, null, 2)}</div>

      <br />
      <br />
      <br />
      <h1>FORMATTED</h1>
      <SelectedRoom mouseData={mouse}/>
      
    </div>
  );
}

const cls = styles({
  default: `
    width: 500px;
    height:500px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-size: 12px;
    padding: 16px;
    border-radius: 16px;
    border: 1px solid skyblue;
    white-space: pre;
    touch-action: none;
    position: relative;
  `,
  isHovering: `
    background-color: navy;
    color: white;
  `
});

styles.global`
  body {
    font-family: -apple-system, sans-serif;
  }
`;
