const canvas=document.getElementById("myCanvas");
canvas.width=1280;

const ctx = canvas.getContext("2d");
const road1=new Road(100,100);
const road2=new Road2(100,100);
const road3=new Road3(100,100);

const car=new Car(road1.getLaneCenter(1),100,10,20);

animate();

function animate(){
    car.update(road1.borders);
    car.update(road2.borders);
    car.update(road3.borders);

    canvas.height=800;
    ctx.save();
    road1.draw(ctx);
    road2.draw(ctx);
    road3.draw(ctx);
    car.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate);
}