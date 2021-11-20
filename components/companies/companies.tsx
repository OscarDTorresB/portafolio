import { NextPage } from "next"
import Image from "next/image"

// Companies logos
import TheBodyShopLogo from "public/assets/logos/thebodyshop.png"
import TailorsoftLogo from "public/assets/logos/tailorsoft.png"
import SiicoingLogo from "public/assets/logos/siicoing.png"
import IntaktLogo from "public/assets/logos/intakt.png"

const Companies: NextPage = () => {
  const companiesLogos = [
    {
      src: TheBodyShopLogo,
      alt: "The Body Shop",
      aspectRatioForHeight: 1.49,
      needName: false,
      marginTop: null,
      height: 100,
    },
    {
      src: TailorsoftLogo,
      alt: "Tailorsoft",
      aspectRatioForHeight: 2.68,
      needName: false,
      marginTop: "mt-0 md:mt-4",
      height: 80,
    },
    {
      src: SiicoingLogo,
      alt: "Siicoing",
      aspectRatioForHeight: 1.06,
      needName: true,
      marginTop: "mt-0 md:mt-2",
      height: 90,
    },
    {
      src: IntaktLogo,
      alt: "Intakt",
      aspectRatioForHeight: 5.91,
      needName: false,
      marginTop: null,
      height: 45,
    }
  ]
  return (
    <div className="flex flex-col gap-8 justify-between md:flex-row items-center my-8">
      {companiesLogos.map(({ src, alt, aspectRatioForHeight, needName, marginTop, height }) => (
        <div key={alt} className={`flex flex-col items-center ${marginTop ?? ""}`}>
          <Image
            src={src}
            alt={alt}
            height={height}
            width={height * aspectRatioForHeight}
            priority
          />
          {needName && (
            <div className="text-center font-semibold">{alt}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Companies;