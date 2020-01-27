
function CuboidMaker (length, width, height){
    this.length = length;
    this.width = width;
     this.height = height;
  }

  CuboidMaker.prototype.volume = function(length, width, height){
    return (length * width * height);
  }

  CuboidMaker.prototype.surfaceArea = function(length, width, height){
    return (length * width + length * height + width * height);
  }
  
  cuboid = new CuboidMaker ({
    length: 4,  
    width:  5, 
    height: 5,
  });

class CuboidMaker2 {
  constructor(option){
    this.length = option.length
    this.width = option.width
    this.height = option.height
    }
volume (length, width, height){
return (length * width * height);
}
surfaceArea (length, width, height){
    return 2 * (length * width + length * height + width);
}
}
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.