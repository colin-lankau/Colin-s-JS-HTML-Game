class Bouncer
{
	constructor(img, x, y, frameX, frameW, frameH, speed, xdir, ydir, numbounces)
	{
		this.img=img;
		this.x=x;
		this.y=y;
		this.frameX=frameX;
		this.frameW=frameW;
		this.frameH=frameH;
		this.speed=speed;
		this.xdir=xdir;
        this.ydir=ydir;
		this.numbounces=numbounces;
	}
	animate(timing)
	{
		if(timing%6==0)
		{
			this.frameX++;
			if(this.frameX>1)
				this.frameX=0;
		}
	}
	move()
	{	
		if(this.numbounces<4)
		{
			if(this.xdir==-1 && this.x<0)
			{
				this.xdir = 1;
				this.numbounces++;
			}
			if(this.xdir==1 && this.x>900)
			{
				this.xdir = -1;
				this.numbounces++;
			}
			if(this.ydir==-1 && this.y<0)
			{
				this.ydir = 1;
				this.numbounces++;
			}
			if(this.ydir==1 && this.y>450)
			{
				this.ydir = -1;
				this.numbounces++;
			}
		}
		this.y = this.y+(this.speed*this.ydir);
		this.x = this.x+(this.speed*this.xdir);
	}
	draw(ctx)
	{
		ctx.beginPath();
			ctx.drawImage(this.img, this.frameX*this.frameW, 0, this.frameW, this.frameH, this.x, this.y, 100, 100);
		ctx.closePath();
	}
}