{
    //

    type circle={
        shape: 'circle';
        radius: number
    }
    type rectangle={
        shape:'rectangle';
        width: number;
        height: number;
    }

    type Shape = circle|rectangle

    function  calculateShapeArea(sp: Shape):number{
        if(sp.shape === 'circle'){
            return Math.PI * sp.radius * sp.radius;
        }
        else{
            return sp.width * sp.height
        }
    }



    // Sample Input 1:
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// console.log(circleArea);




// Sample Input 2:
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// console.log(rectangleArea);


    //

}