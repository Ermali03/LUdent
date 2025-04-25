import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { BookConsultation } from "@/components/book-consultation";
import { HeroSectionWithOverlay } from "@/components/hero-section-with-overlay";

interface ServicePageProps {
  params: {
    service: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const serviceData = getServiceData(params.service);

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSectionWithOverlay
        title={serviceData.title}
        subtitle="Our Services"
        imageSrc="/images/image3.jpg"
        height="small"
      >
        <p className="text-teal-100 text-lg">{serviceData.shortDescription}</p>
      </HeroSectionWithOverlay>

      {/* Service Details */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                ABOUT <span className="text-teal-600">{serviceData.title}</span>
              </h2>
              <div className="space-y-4">
                {serviceData.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
              <BookConsultation />
            </div>
            <div className="relative">
              <Image
                src={serviceData.image || "/placeholder.svg"}
                alt={serviceData.title}
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {serviceData.benefits && (
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
                BENEFITS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Procedure Section */}
      {serviceData.procedure && (
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
                PROCEDURE
              </h2>
              <p className="text-gray-600 text-center">
                {serviceData.procedure}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {serviceData.faqs && (
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
                FAQ
              </h2>
              <div className="space-y-8">
                {serviceData.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-8">
                    <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function getServiceData(serviceSlug: string) {
  const services = {
    implants: {
      title: "DENTAL IMPLANTS",
      shortDescription:
        "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
      image: "/images/dentalimplants.jpg",
      description: [
        "Dental implants are titanium posts that are surgically placed into the jawbone beneath your gums to replace the roots of missing teeth. Once in place, they allow your dentist to mount replacement teeth onto them.",
        "Because implants fuse to your jawbone, they provide stable support for artificial teeth. Dentures and bridges mounted to implants won't slip or shift in your mouth, which is especially important when eating and speaking.",
      ],
      benefits: [
        "Look and function like natural teeth",
        "Can last a lifetime with proper care",
        "Prevent bone loss in the jaw",
        "No need to modify adjacent teeth",
        "Improved comfort and speech",
        "Easier eating and improved nutrition",
      ],
      procedure:
        "The implant process typically involves several steps spread over 3-9 months. First, the implant is placed in the jawbone during a surgical procedure. After a healing period (osseointegration), an abutment is attached to the implant. Finally, a custom-made crown is placed on the abutment, completing your new tooth.",
      faqs: [
        {
          question: "ARE DENTAL IMPLANTS PAINFUL?",
          answer:
            "Most patients report that the discomfort during and after the procedure is much less than they expected. Local anesthesia is used during the procedure, and pain medication can be prescribed for any discomfort afterward.",
        },
        {
          question: "HOW LONG DO DENTAL IMPLANTS LAST?",
          answer:
            "With proper care and maintenance, dental implants can last a lifetime. Regular dental check-ups and good oral hygiene are essential for the long-term success of your implants.",
        },
        {
          question: "AM I A CANDIDATE FOR DENTAL IMPLANTS?",
          answer:
            "Most people who are in good general health and have adequate bone in their jaw are candidates for dental implants. During your consultation, our doctors will evaluate your specific situation and recommend the best treatment options.",
        },
      ],
    },
    veneers: {
      title: "VENEERS",
      shortDescription:
        "Thin porcelain shells that cover the front surface of teeth to improve appearance.",
      image: "/images/veneers.jpg",
      description: [
        "Dental veneers are thin, custom-made shells of tooth-colored materials designed to cover the front surface of teeth to improve your appearance. These shells are bonded to the front of the teeth, changing their color, shape, size, or length.",
        "Veneers can be made from porcelain or from resin composite materials. Porcelain veneers resist stains better than resin veneers and better mimic the light-reflecting properties of natural teeth.",
      ],
      benefits: [
        "Natural-looking dental surface",
        "Stain-resistant",
        "Conservative approach to changing a tooth's color and shape",
        "Strong and long-lasting",
        "Doesn't require extensive shaping prior to the procedure",
        "Improves appearance of teeth that are discolored, worn down, chipped, or misaligned",
      ],
      procedure:
        "Getting a veneer usually requires three trips to the dentist – one for a consultation and two to make and apply the veneers. The process involves removing about 0.5mm of enamel from the tooth surface, taking an impression of the tooth, and then bonding the veneer to the tooth with special cement.",
      faqs: [
        {
          question: "HOW LONG DO VENEERS LAST?",
          answer:
            "Porcelain veneers typically last 10-15 years, while composite resin veneers last around 5-7 years. The lifespan of your veneers depends on how well you take care of them.",
        },
        {
          question: "DO VENEERS RUIN YOUR TEETH?",
          answer:
            "Veneers don't ruin teeth when done correctly. However, because a small amount of enamel is removed, the process is not reversible. Proper dental evaluation and treatment planning are essential.",
        },
        {
          question: "CAN VENEERS BE WHITENED?",
          answer:
            "Unlike natural teeth, porcelain veneers cannot be whitened with bleaching treatments. They are designed to resist staining and maintain their color over time.",
        },
      ],
    },
    orthodontics: {
      title: "ORTHODONTICS",
      shortDescription:
        "Treatments to correct misaligned teeth and jaws for a beautiful, functional smile.",
      image: "/images/orthodontics.jpg",
      description: [
        "Orthodontic treatment is used to correct teeth that are crowded, crooked, protruding, out of alignment or have irregular spacing. By moving the teeth into the ideal position, orthodontics can help enhance the appearance of your teeth and improve how they work.",
        "At LUDent, we offer various orthodontic options, including traditional braces, clear aligners, and other modern techniques to help you achieve a straighter, healthier smile.",
      ],
      benefits: [
        "Improved appearance and self-confidence",
        "Better oral health and easier cleaning",
        "Reduced risk of tooth decay and gum disease",
        "Improved speech and chewing function",
        "Prevention of abnormal wear of tooth surfaces",
        "Reduced risk of injury to protruding teeth",
      ],
      procedure:
        "Orthodontic treatment begins with a thorough examination and development of a treatment plan. Depending on your specific needs, we may recommend traditional braces, clear aligners, or other appliances. Treatment typically lasts from 6 months to 2 years, followed by a retention phase to maintain the results.",
      faqs: [
        {
          question: "AT WHAT AGE SHOULD ORTHODONTIC TREATMENT BEGIN?",
          answer:
            "While orthodontic treatment can be effective at any age, the American Association of Orthodontists recommends that children have their first orthodontic evaluation by age 7. Early intervention can guide proper jaw growth and prevent more serious problems later.",
        },
        {
          question: "DOES ORTHODONTIC TREATMENT HURT?",
          answer:
            "You may experience some discomfort when braces are first placed and after adjustments, but this typically subsides within a few days. Over-the-counter pain relievers can help manage any discomfort.",
        },
        {
          question:
            "HOW OFTEN WILL I NEED TO VISIT THE DENTIST DURING TREATMENT?",
          answer:
            "Most patients with braces need to visit every 4-8 weeks for adjustments. For clear aligner therapy, visits are typically scheduled every 6-8 weeks to monitor progress and provide new sets of aligners.",
        },
      ],
    },
    zirkon: {
      title: "ZIRKON CROWNS",
      shortDescription:
        "High-quality, natural-looking dental crowns made from zirconium dioxide.",
      image: "/images/zircon.jpg",
      description: [
        "Zirkon (zirconia) crowns are made from zirconium dioxide, a durable, biocompatible material that offers exceptional strength and aesthetics. These crowns provide a metal-free alternative to traditional porcelain-fused-to-metal crowns.",
        "Zirkon crowns are known for their durability, natural appearance, and biocompatibility, making them an excellent choice for both front and back teeth.",
      ],
      benefits: [
        "Exceptional strength and durability",
        "Natural-looking appearance",
        "Metal-free and biocompatible",
        "Resistant to chipping and cracking",
        "Minimal tooth reduction required",
        "Suitable for both front and back teeth",
      ],
      procedure:
        "Getting a zirkon crown typically requires two visits. During the first visit, the tooth is prepared, and an impression is taken. A temporary crown is placed while your custom zirkon crown is fabricated. At the second visit, the temporary crown is removed, and the permanent zirkon crown is bonded in place.",
      faqs: [
        {
          question: "HOW LONG DO ZIRKON CROWNS LAST?",
          answer:
            "With proper care, zirkon crowns can last 15 years or more. Their exceptional durability makes them a long-lasting solution for restoring damaged teeth.",
        },
        {
          question: "ARE ZIRKON CROWNS SUITABLE FOR FRONT TEETH?",
          answer:
            "Yes, zirkon crowns are an excellent choice for front teeth due to their natural appearance and translucency that mimics natural tooth enamel.",
        },
        {
          question: "DO ZIRKON CROWNS CAUSE ALLERGIC REACTIONS?",
          answer:
            "Zirkon crowns are biocompatible and hypoallergenic, making them suitable for patients with metal allergies or sensitivities.",
        },
      ],
    },
    "esthetic-fill": {
      title: "ESTHETIC FILLINGS",
      shortDescription:
        "Tooth-colored fillings that restore damaged teeth while maintaining a natural appearance.",
      image: "/images/eshtetic.jpg",
      description: [
        "Esthetic fillings, also known as composite or tooth-colored fillings, are made from a mixture of plastic and fine glass particles. These modern fillings bond directly to the tooth structure, providing both strength and a natural appearance.",
        "Unlike traditional amalgam (silver) fillings, esthetic fillings blend seamlessly with your natural tooth color, making them virtually invisible when you smile or speak.",
      ],
      benefits: [
        "Natural appearance that matches your tooth color",
        "Preserves more of your natural tooth structure",
        "Bonds directly to the tooth for added strength",
        "Mercury-free and environmentally friendly",
        "Less sensitive to temperature changes",
        "Can be repaired if damaged",
      ],
      procedure:
        "The procedure for placing an esthetic filling is typically completed in a single visit. After removing the decayed portion of the tooth, the area is cleaned and prepared. The composite material is then applied in layers, shaped to match your natural tooth, and hardened with a special light. Finally, the filling is polished for a smooth, natural finish.",
      faqs: [
        {
          question: "HOW LONG DO ESTHETIC FILLINGS LAST?",
          answer:
            "With proper care, esthetic fillings typically last 5-10 years. Factors such as the size of the filling, location in the mouth, and oral hygiene habits can affect their longevity.",
        },
        {
          question: "ARE ESTHETIC FILLINGS AS STRONG AS AMALGAM FILLINGS?",
          answer:
            "Modern composite materials have significantly improved in strength and durability. While amalgam may still be slightly stronger for very large fillings in back teeth, esthetic fillings provide excellent strength for most applications while preserving more natural tooth structure.",
        },
        {
          question:
            "CAN EXISTING AMALGAM FILLINGS BE REPLACED WITH ESTHETIC FILLINGS?",
          answer:
            "Yes, many patients choose to replace their old amalgam fillings with esthetic fillings for both cosmetic reasons and to eliminate mercury from their mouths. Our dentists can evaluate your existing fillings and recommend the best options for replacement.",
        },
      ],
    },
    whitening: {
      title: "PROFESSIONAL WHITENING",
      shortDescription:
        "Advanced teeth whitening treatments for a brighter, more confident smile.",
      image: "/images/whitening.jpg",
      description: [
        "Professional teeth whitening is a safe, effective way to enhance the brightness of your smile. At LUDent, we offer both in-office and take-home whitening options to accommodate your preferences and lifestyle.",
        "Our professional whitening treatments use higher-concentration bleaching agents than over-the-counter products, delivering more dramatic results in less time. All treatments are supervised by our dental professionals to ensure safety and effectiveness.",
      ],
      benefits: [
        "Significant improvement in tooth color (up to 8 shades whiter)",
        "Fast results – noticeable improvement after just one treatment",
        "Professional supervision for safety and comfort",
        "Customized treatment based on your specific needs",
        "Longer-lasting results than over-the-counter products",
        "Boost in self-confidence with a brighter smile",
      ],
      procedure:
        "For in-office whitening, a protective barrier is applied to your gums before a high-concentration whitening gel is applied to your teeth. A special light may be used to enhance the whitening process. The entire procedure takes about 60-90 minutes. For take-home whitening, we create custom-fitted trays and provide professional-strength whitening gel with instructions for use at home over a period of 1-2 weeks.",
      faqs: [
        {
          question: "IS PROFESSIONAL TEETH WHITENING SAFE?",
          answer:
            "Yes, professional teeth whitening is safe when performed under the supervision of a dental professional. We take precautions to protect your gums and monitor the process to prevent sensitivity or damage.",
        },
        {
          question: "HOW LONG DO THE RESULTS LAST?",
          answer:
            "Results typically last from 6 months to 2 years, depending on your habits. Consuming staining substances like coffee, tea, red wine, and tobacco can shorten the duration of your results. Touch-up treatments can help maintain your bright smile.",
        },
        {
          question: "WILL TEETH WHITENING WORK ON ALL TYPES OF DISCOLORATION?",
          answer:
            "Professional whitening works best on extrinsic stains (surface stains from food, drinks, and tobacco). It may be less effective on intrinsic stains (those inside the tooth) or discoloration caused by certain medications, trauma, or excessive fluoride exposure. During your consultation, we'll evaluate your teeth and recommend the most appropriate treatment options.",
        },
      ],
    },
    filler: {
      title: "DERMAL FILLERS",
      shortDescription:
        "Cosmetic treatments to restore volume and fullness to the face.",
      image: "/images/dermal.jpg",
      description: [
        "Dermal fillers are gel-like substances that are injected beneath the skin to restore lost volume, smooth lines, soften creases, or enhance facial contours. At LUDent, our dental professionals are specially trained to provide facial aesthetic treatments that complement your dental work for a harmonious, rejuvenated appearance.",
        "We use only premium, FDA-approved hyaluronic acid fillers, which are naturally compatible with the body and provide natural-looking, temporary results that can be adjusted to your preferences.",
      ],
      benefits: [
        "Immediate results with minimal downtime",
        "Natural-looking volume enhancement",
        "Smoothing of lines and wrinkles",
        "Improved facial symmetry and proportion",
        "Temporary results that can be adjusted over time",
        "Complementary to dental aesthetic treatments",
      ],
      procedure:
        "After a thorough consultation to understand your goals, the treatment area is cleaned and a topical anesthetic may be applied for comfort. The filler is then precisely injected into targeted areas using a fine needle or cannula. The procedure typically takes 30-60 minutes, and results are visible immediately, with full effects developing over the following days as any swelling subsides.",
      faqs: [
        {
          question: "ARE DERMAL FILLERS PAINFUL?",
          answer:
            "Most patients report minimal discomfort during the procedure. We use topical anesthetics and fillers containing lidocaine to ensure your comfort. Some areas may be more sensitive than others, but the procedure is generally well-tolerated.",
        },
        {
          question: "HOW LONG DO DERMAL FILLERS LAST?",
          answer:
            "Results typically last 6-18 months, depending on the specific filler used, the treatment area, and individual factors such as metabolism and lifestyle. Touch-up treatments can help maintain your desired appearance.",
        },
        {
          question: "WHAT ARE THE POSSIBLE SIDE EFFECTS?",
          answer:
            "Common side effects include temporary redness, swelling, tenderness, or bruising at the injection sites. These typically resolve within a few days. Serious complications are rare when fillers are administered by properly trained professionals.",
        },
      ],
    },
    botox: {
      title: "BOTOX",
      shortDescription:
        "Treatments to reduce facial wrinkles and create a more youthful appearance.",
      image: "/images/botox.jpg",
      description: [
        "Botox is a purified protein that temporarily relaxes the muscles that cause dynamic wrinkles – those that appear with facial expressions like smiling, frowning, or squinting. At LUDent, our dental professionals have extensive knowledge of facial anatomy and are skilled in providing precise Botox treatments for both cosmetic and therapeutic purposes.",
        "In addition to its cosmetic applications, Botox can also be used to treat certain dental conditions such as TMJ disorders, bruxism (teeth grinding), and gummy smiles.",
      ],
      benefits: [
        "Reduction of forehead lines, crow's feet, and frown lines",
        "Prevention of wrinkle formation when started early",
        "Quick treatment with minimal discomfort",
        "No downtime – return to normal activities immediately",
        "Therapeutic benefits for TMJ disorders and bruxism",
        "Complementary to dental aesthetic treatments",
      ],
      procedure:
        "After a consultation to assess your needs and goals, the treatment areas are cleaned, and the Botox is precisely injected into targeted muscles using a very fine needle. The procedure typically takes 10-15 minutes. Results begin to appear within 24-48 hours and fully develop over 7-14 days, lasting approximately 3-4 months.",
      faqs: [
        {
          question: "IS BOTOX SAFE?",
          answer:
            "Yes, Botox has been used safely for both cosmetic and medical purposes for decades. When administered by properly trained professionals, it has an excellent safety profile with minimal risk of complications.",
        },
        {
          question: "WILL I LOOK FROZEN OR UNNATURAL AFTER BOTOX?",
          answer:
            'No, when properly administered, Botox should not leave you looking "frozen" or expressionless. Our approach is to provide natural-looking results that preserve your ability to express emotions while reducing unwanted wrinkles.',
        },
        {
          question: "HOW IS BOTOX USED FOR DENTAL CONDITIONS?",
          answer:
            "For TMJ disorders and bruxism, Botox can relax the overactive jaw muscles that cause pain and damage to teeth. For gummy smiles, small amounts of Botox can be used to relax the upper lip muscles, reducing the amount of gum tissue shown when smiling.",
        },
      ],
    },
    prosthetics: {
      title: "DENTAL PROSTHETICS",
      shortDescription:
        "Custom-made replacements for missing teeth to restore function and aesthetics.",
      image: "/images/DENTALPROSTHETICS.webp",
      description: [
        "Dental prosthetics include a variety of devices designed to replace missing teeth and restore both function and appearance. At LUDent, we offer comprehensive prosthetic solutions including dentures, bridges, and implant-supported restorations.",
        "Our prosthetic devices are custom-crafted using high-quality materials to ensure comfort, durability, and a natural appearance that complements your facial features and remaining natural teeth.",
      ],
      benefits: [
        "Restored ability to chew and speak properly",
        "Maintenance of facial structure and prevention of bone loss",
        "Improved appearance and self-confidence",
        "Prevention of shifting of remaining teeth",
        "Custom-designed for your unique needs",
        "Options for fixed or removable solutions",
      ],
      procedure:
        "The process for dental prosthetics varies depending on the specific type. Generally, it involves a comprehensive examination, taking impressions of your mouth, custom fabrication of the prosthetic device, and precise fitting and adjustment to ensure comfort and function. Some prosthetics may require preliminary procedures such as extractions or implant placement.",
      faqs: [
        {
          question: "WHAT TYPES OF DENTAL PROSTHETICS DO YOU OFFER?",
          answer:
            "We offer a full range of prosthetic options including complete dentures (for patients missing all teeth), partial dentures (for patients missing some teeth), fixed bridges, and implant-supported restorations such as crowns, bridges, and overdentures.",
        },
        {
          question:
            "HOW LONG DOES IT TAKE TO GET USED TO A NEW DENTAL PROSTHETIC?",
          answer:
            "Adaptation periods vary by individual and type of prosthetic. Most patients adjust to their new prosthetics within a few weeks. During this time, you may experience increased saliva flow, mild soreness, or slight changes in speech, all of which typically resolve as you become accustomed to the device.",
        },
        {
          question: "HOW DO I CARE FOR MY DENTAL PROSTHETIC?",
          answer:
            "Care instructions depend on the type of prosthetic. Removable prosthetics should be cleaned daily and stored properly when not in use. Fixed prosthetics require regular brushing, flossing, and professional cleanings. We provide detailed care instructions specific to your prosthetic and are available to answer any questions you may have.",
        },
      ],
    },
  };

  return services[serviceSlug as keyof typeof services] || null;
}
