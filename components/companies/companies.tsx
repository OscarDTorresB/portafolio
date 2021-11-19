import { NextPage } from "next"
import Image from "next/image"

// Companies logos
import TheBodyShopLogo from "public/assets/logos/thebodyshop.png"
import TailorsoftLogo from "public/assets/logos/tailorsoft.png"
import SiicoingLogo from "public/assets/logos/siicoing.png"

const Companies: NextPage = () => {
  const companiesHeight = 80;
  const companiesLogos = [
    {
      src: TheBodyShopLogo,
      alt: "The Body Shop",
      aspectRatioForHeight: 1.49,
      needName: false,
      marginTop: null,
    },
    {
      src: TailorsoftLogo,
      alt: "Tailorsoft",
      aspectRatioForHeight: 2.68,
      needName: false,
      marginTop: "mt-4",
    },
    {
      src: SiicoingLogo,
      alt: "Siicoing",
      aspectRatioForHeight: 1.06,
      needName: true,
      marginTop: null,
    }
  ]
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-between items-center my-8">
      {companiesLogos.map(({ src, alt, aspectRatioForHeight, needName, marginTop }) => (
        <div key={alt} className={`flex flex-col items-center ${marginTop ?? ""}`}>
          <Image
            src={src}
            alt={alt}
            height={companiesHeight}
            width={companiesHeight * aspectRatioForHeight}
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