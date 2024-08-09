<template>
  <BCol>
    <BCard no-body>
      <BCardBody>
        <BRow>
            <div class="location d-flex align-items-center justify-content-center gap-1">
                <i class='bx bxs-map'></i>
                <span>Penang, Malaysia</span>
            </div>
        </BRow>
        
        <BRow>
            <div class="container-center d-flex align-items-center justify-content-start mt-3">
                
                <div class="weather-now">
                    <div class="sunny-now"></div>   
                    <span>Sunny</span>
                </div>
                <div class="temperature">
                    <span>30&#176;c</span>
                </div>
                    
                <BCol>
                    <div class="prec-hum">
                        <div class="precipitation">
                            <!-- <i class='bx bxs-cloud-rain'></i> -->
                            <h6>Precipitation</h6>
                            <h5>40<span>%</span></h5>
                        </div>
                        <div class="humidity">
                            <!-- <i class='bx bxs-droplet' ></i> -->
                            <h6>Humidity</h6>
                            <h5>60<span>%</span></h5>
                        </div>
                    </div>
                </BCol>
                <BCol>
                    <div class="wind-vis">
                        <div class="wind">
                            <!-- <i class='bx bx-wind' ></i> -->
                            <h6>Wind Speed</h6>
                            <h5>11<span>km/h</span></h5>
                        </div>
                        <div class="visibility">
                            <!-- <i class='bx bxs-binoculars' ></i> -->
                            <h6>Visibility</h6>
                            <h5>7<span>km</span></h5>
                        </div>
                    </div>
                </BCol>
            </div>
        </BRow>

        <BRow class="mt-3">
            <h5>Upcoming 5 hours</h5>
            <div class="container-bottom d-flex justify-content-between">
                <div class="weather">
                    <span>15:00</span>
                    <div class="sunny"></div>   
                </div>
                <div class="weather">
                    <span>16:00</span>
                    <div class="partly_cloudy">
                        <div class="partly_cloudy__sun"></div>
                        <div class="partly_cloudy__cloud"></div>
                    </div>   
                </div>
                <div class="weather">
                    <span>17:00</span>
                    <div class="cloudy"></div>
                </div>
                <div class="weather">
                    <span>18:00</span>
                    <div class="rainy">
                        <div class="rainy__cloud"></div>
                        <div class="rainy__rain"></div>
                    </div>
                </div>
                <div class="weather">
                    <span>19:00</span>
                    <div class="thundery">
                        <div class="thundery__cloud"></div>
                        <div class="thundery__rain"></div>
                    </div>
                </div>
            </div>
        </BRow>
        
      </BCardBody>
    </BCard>
  </BCol>
  <BCol> </BCol>
</template>

<style>

.bx p {
    font-size: 12px;
}

.weather {
    margin-right: 30px;
}

.weather span,
.weather-now span {
	margin-bottom: 4rem;
	font-size: 1rem;
	text-transform: uppercase;
    font-weight: 600;
    margin-left: 12px;
}

.prec-hum {
    border-right: 2px solid #fff; 
    padding-right: 20px;
    text-align: right;
}

.wind-vis {
    padding-left: 20px;
    text-align: left;
}

/* .visibility .bx,
.wind .bx,
.humidity .bx,
.precipitation .bx {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
} */

.prec-hum h5,
.wind-vis h5 {
    font-size: 30px;
}

.prec-hum span,
.wind-vis span {
    font-size: 15px;
}

.temperature span {
    margin-bottom: 4rem;
	font-size: 50px;
	text-transform: uppercase;
    font-weight: 600;
    margin-left: 12px;
    margin-right: 50px;
}
.sunny {
    position: relative;
    width: 4rem;
    height: 4rem;
}
.sunny-now {
	position: relative;
	width: 5rem;
	height: 5rem;
}

.sunny-now,
.sunny,
.partly_cloudy__sun {
	&:before {
		content: "";
		position: absolute;
		height: 80%;
		width: 80%;
		top: 10%;
		right: 10%;
		border-radius: 50%;
		z-index: 2;
		background-color: #f1c40f;
		background-image: radial-gradient(#f1c40f, #f39c12);
		box-shadow: 0 0 25px #917508;
	}
	&:after {
		content: "";
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: 50%;
		z-index: 1;
		background-color: #f39c12;
		will-change: opacity, transform;
		animation: fadeIn 2s linear infinite reverse,
			scaleDown 2s linear infinite reverse;
	}
}

.cloudy {
	position: relative;
	width: 4rem;
	height: 4rem;
}
.cloudy,
.partly_cloudy__cloud,
.rainy__cloud,
.thundery__cloud {
	&:before {
		content: "";
		position: absolute;
		height: 40%;
		width: 40%;
		top: 30%;
		right: 0%;
		border-radius: 50%;
		border-bottom-left-radius: 0;
		z-index: 2;
		background-color: #ecf0f1;
		background-image: radial-gradient(#ecf0f1, #bdc3c7);
		box-shadow: 0 0 25px rgba(0,0,0,.3);
	}
	&:after {
		content: "";
		position: absolute;
		height: 60%;
		width: 70%;
		top: 10%;
		right: 30%;
		border-radius: 50%;
		border-bottom-right-radius: 0;
		z-index: 1;
		background-color: #ecf0f1;
		background-image: radial-gradient(#ecf0f1, #bdc3c7);
		box-shadow: 0 0 25px rgba(0,0,0,.3);
	}
}

.partly_cloudy {
	position: relative;
	width: 4rem;
	height: 4rem;
	&__sun {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	&__cloud {
		position: absolute;
		width: 60%;
		height: 60%;
		top: 40%;
		z-index: 2;
		will-change: transform;
		animation: translateUp 2s linear infinite alternate;
	}
}

.rainy,
.thundery {
	position: relative;
	width: 4rem;
	height: 4rem;
	&__cloud {
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: 2;
		&:before {
			background-color: #95a5a6;
			background-image: radial-gradient(#95a5a6, #7f8c8d);
		}
		&:after {
			background-color: #95a5a6;
			background-image: radial-gradient(#95a5a6, #7f8c8d);
		}
	}
	&__rain {
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: 1;
		overflow: hidden;
		&:before {
			content: "";
			position: absolute;
			height: 80%;
			width: 20%;
			top: 20%;
			right: 50%;
			z-index: 1;
			background-image: linear-gradient(transparent, #94cdd1);
			will-change: opacity, transform;
			animation: fadeIn 1s ease-out infinite reverse,
				scaleUp 1s ease-out infinite;
		}
		&:after {
			content: "";
			position: absolute;
			height: 60%;
			width: 20%;
			top: 40%;
			right: 20%;
			z-index: 1;
			opacity: 0;
			background-image: linear-gradient(transparent, #94cdd1);
			will-change: opacity, transform;
			animation: fadeIn 2s ease-out .4s infinite reverse,
				scaleUp 2s ease-out .4s infinite;
		}
	}
}

.thundery {
	&__cloud {
		&:before {
			background-color: #4d5656;
			background-image: radial-gradient(#4d5656, #393c3c);
			animation: thunder 4s linear .02s infinite alternate;
		}
		&:after {
			background-color: #4d5656;
			background-image: radial-gradient(#4d5656, #393c3c);
			animation: thunder 4s linear infinite alternate;
		}
	}
	&__rain {
		&:before {
			animation: fadeIn .5s ease-out infinite reverse,
				scaleUp .5s ease-out infinite;
		}
		&:after {
			animation: fadeIn .75s ease-out .2s infinite reverse,
				scaleUp .75s ease-out .2s infinite;
		}
	}
}

/* Animation */
@keyframes fadeIn {
	0% { opacity: 0; }
	100% { opacity: 1; }
}
@keyframes scaleDown {
	0% { transform: scale(1); }
	100% { transform: scale(.8); }
}

@keyframes translateUp {
	0% { transform: translatey(15%); }
	100% { transform: translatey(0); }
}

@keyframes scaleUp {
	0% { transform: scaley(0); }
	100% { transform: scaley(1); }
}

@keyframes thunder {
	0% { box-shadow: 0 0 25px #fff; }
	2% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
	49% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
	50% { box-shadow: 0 0 25px #fff; }
	52% { box-shadow: 0 0 25px #f7db6e; }
	53% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
	69% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
	70% { box-shadow: 0 0 25px #fff; }
	71% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
	75% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
	76% { box-shadow: 0 0 25px #fff; }
	77% { box-shadow: 0 0 25px #a8d3f0; }
	78% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
	100% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
}
</style>