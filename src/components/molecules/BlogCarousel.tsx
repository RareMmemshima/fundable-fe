import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import carouselImage from "../../../public/carousel-card-img.svg"
import cardBlur from "../../../public/card-blur.svg"
import SideBlur from "../../../public/side-blur.svg"
import { FaArrowRight } from "react-icons/fa";


const BlogCarousel = ({ setApi }: { setApi: (api: any) => void }) => {

  const cardDetails = [
    {
      heading: "Talk it out with audio",
      description: "Effortlessly distribute funds to recipients, with complete transparency, robust security, and real-time tracking.",
      Image: carouselImage,
      link: "link"
    },
    {
      heading: "Talk it out with audio",
      description: "Effortlessly distribute funds to recipients, with complete transparency, robust security, and real-time tracking.",
      Image: carouselImage,
      link: "link"
    },
    {
      heading: "Talk it out with audi",
      description: "Effortlessly distribute funds to recipients, with complete transparency, robust security, and real-time tracking.",
      Image: carouselImage,
      link: "link"
    },
    {
      heading: "Talk it out with audio",
      description: "Effortlessly distribute funds to recipients, with complete transparency, robust security, and real-time tracking.",
      Image: carouselImage,
      link: "link"
    },
    {
      heading: "Talk it out with audio",
      description: "Effortlessly distribute funds to recipients, with complete transparency, robust security, and real-time tracking.",
      Image: carouselImage,
      link: "link"
    },
    
  ]



    return (
        <Carousel
        setApi={setApi}
      opts={{
        align: "start",
      }}
      className="w-full ml-auto max-w-[1172px] flex items-center justify-center z-[999] "
    >
      <CarouselContent className=" w-full  " >
        {cardDetails.map((cardDetail, index) => (
          <CarouselItem key={index} className="basis-1/ lg:basis-1/3  w-[167.5px]   md:max-w-[335px] md:min-w-[290px] mx-2     ">
        
             <Card className="bg-red-800 w-[167.5px] md:min-w-[290px]  lg:w-[335px] h-[199px] md:h-[398px] bg-[#14161F66] border border-[#1E212F] backdrop-blur-[40%] rounded-[15px] p-0 " >
             <CardContent className= "relative w-full h-full flex flex-col items-center justify-stretch gap-3 rounded-[15px] px-2 py-1  " >
              <div className="w-full h-[50%] m-0 " >
            <Image src={cardDetail.Image} alt="image" width={100} height={100} className="w-full h-full object-contain" />
              </div>
            <CardDescription className=" w-full  h-full flex flex-col items-start justify-evenly py-3 gap-2 "  >
              <h1 className="text-[#ffffff] text-[7.7px] md:text-[15.58px] font-medium leading-[10.91px] md:leading-[21.81px] " >{cardDetail.heading} </h1>
              <p className="text-[#A5AEC0] text-[8.31px] md:text-[16.62px] font-medium leading-[12.46px] md:leading-[24.93px] font-urbanist  " >{cardDetail.description} </p>
              <a href={cardDetail.link} className="text-[#7A7A7A] text-[7.63px] md:text-[15.27px] font-semibold font-urbanist flex items-center gap-2 md:leading-[15.24px] leading-[7.62px] " > <span>Read more</span> <span><FaArrowRight/></span> </a>
            </CardDescription>
            <Image src={cardBlur} alt="blur" height={100} width={100} className="absolute w-[155px] h-[143px] top-[25%] right-[15%] object-cover " />
            <Image src={SideBlur} alt="blur" height={100} width={100} className="absolute w-[39px] h-[109px] top-[35%] left-0 object-contain  " />
             </CardContent>
             </Card>
        
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    )
}


export default  BlogCarousel