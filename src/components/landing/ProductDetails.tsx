import Image from "next/image";
import React from "react";
import bio from "/src/images/bioCardin.png";

const ProductDetails = () => {
  return (
    <section className="w-full py-16  bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Über BioCardin
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 mb-4">BioCardin, 20 Kapseln</p>
            <p className="text-lg text-gray-600 mb-4">
              Zusammensetzung: Inhalt pro Kapsel:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
              <li>Brennnesselblattextrakt (Urtica dioica L.) 4:1 50 mg</li>
              <li>
                Weißdornblüten und Blattextrakt (Crataegus monogyna) 4:1 20 mg
              </li>
              <li>
                Mutterkraut (Leonurus cardiaca) Blütenspitzenextrakt 4:1 20 mg
              </li>
              <li>Vitamin B2 (Riboflavin) 0,70 mg (50 % des NRV)</li>
              <li>
                Vitamin B6 (Pyridoxinhydrochlorid) 0,70 mg (50 % des
                Nährstoffreferenzwerts)
              </li>
              <li>Vitamin B1 (Thiaminhydrochlorid) 0,55 mg (50 % des NRV)</li>
              <li>
                Vitamin B12 (Cyanocobalamin) rein 0,00125 mg (50 % des NRV*)
              </li>
            </ul>
            <p className="text-lg text-gray-600 mb-4">
              Art der Einnahme: 2 Kapseln pro Tag nach dem Essen mit einem Glas
              Wasser.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Die empfohlene Tagesdosis darf nicht überschritten werden. Nicht
              als Ersatz für eine ausgewogene Ernährung einnehmen. Nicht
              verschlossen bei Raumtemperatur und außerhalb der Reichweite von
              Kindern aufbewahren. Nicht einnehmen, wenn Sie überempfindlich
              (allergisch) gegen die Inhaltsstoffe des Mittels sind. Nicht
              einnehmen, wenn die Verpackung beschädigt ist. Nach Ablauf des
              Verfallsdatums nicht mehr einnehmen. Nicht während der
              Schwangerschaft oder der Stillzeit einnehmen. Zu Risiken und
              Nebenwirkungen lesen Sie die Packungsbeilage und fragen Sie Ihren
              Arzt oder Apotheker.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Lagerbedingungen: Bei Raumtemperatur (15–25 °C)
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Hergestellt in der EU, im Auftrag von
            </p>
          </div>
          <div>
            <Image
              src={bio}
              alt="BioCardin Produktbild"
              width={800}
              height={800}
              className="w-full h-auto object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
