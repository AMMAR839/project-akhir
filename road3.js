class Road3{
    constructor(x,width,laneCount=2){
        this.x=x;
       
        this.width=width;
        this.laneCount=laneCount;

        this.left=x-width/2;
        this.right=x+width/2;

        const infinity=400;
        this.top=-infinity;
        this.bottom=infinity;

        const topLeft={x:250/3,y:350};
        const topRight={x:100+250/3,y:200+(50/3)};
        const bottomLeft={x:500,y:350};
        const bottomRight={x:600,y:200+(50/3)};
        this.borders=[
            [topLeft,bottomLeft],
            [topRight,bottomRight]
        ];
    }

    getLaneCenter(laneIndex){
        const laneWidth=this.width/this.laneCount;
        return this.left+laneWidth/2+
            Math.min(laneIndex,this.laneCount-1)*laneWidth;
    }

    draw(ctx){
        ctx.lineWidth=5;
        ctx.strokeStyle="white";

        for(let i=1;i<=this.laneCount-1;i++){
            const x=lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
            
            ctx.setLineDash([20,20]);
            ctx.beginPath();
            ctx.moveTo(x,0);
            ctx.lineTo(x,0);
            ctx.stroke();
        }

        ctx.setLineDash([]);
        this.borders.forEach(border=>{
            ctx.beginPath();
            ctx.moveTo(border[0].x,border[0].y);
            ctx.lineTo(border[1].x,border[1].y);
            ctx.stroke();
        });
    }
}