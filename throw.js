AFRAME.registerComponent('throw', {
    init: function () {
      this.camera = document.querySelector('#camera').object3D;
      this.bowlingBall = this.el.object3D;
  
      document.addEventListener('keydown', (event) => {
        if (event.key === ' ') { // Spacebar key
          this.throwBall();
        }
      });
    },
  
    throwBall: function () {
      // Get the direction the camera is facing
      const cameraDirection = new THREE.Vector3();
      this.camera.getWorldDirection(cameraDirection);
  
      // Set the velocity of the bowling ball in the camera direction
      const velocity = cameraDirection.multiplyScalar(10); // Adjust speed as needed
      this.bowlingBall.setLinearVelocity(velocity);
    }
  });
  