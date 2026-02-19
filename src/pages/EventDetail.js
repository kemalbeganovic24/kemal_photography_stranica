import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';
import folklor from '../assets/cover_bzk.jpg'
import ilahija from '../assets/cover_nocilahija.JPG'
import testament from '../assets/cover_testamnet.jpg'
import covervatrogasci from '../assets/cover_vatrogasci.jpg'
import fkvitez from '../assets/cover_fk.JPG'
import kmfvitez from '../assets/cover_kmf.JPG'
import anesajla from '../assets/cover_anesajla.jpg'
import elvedin from '../assets/cover_elvedinsemina.jpg'
import msts from '../assets/mstscover.jpg'
import mssvitez from '../assets/mssvitezcover.jpg'
import msstravnik from '../assets/msstravnikcover.jpg'
import emanulah from '../assets/cover_emanulah.jpg'
import nermin from '../assets/nermincover.jpg'
import graz from '../assets/grazcover.jpg'
import dzejlanakumstvo from '../assets/cover_kumstvodzejlana.jpg'
import aras from '../assets/cover_aras.jpg'
import ajnai from '../assets/cover_ajnai.jpg'
import enesdanijela from '../assets/cover_naslovna_enes.jpg'
import venecija from '../assets/venecijacover2.jpg'
import sanmarino from '../assets/sanmarinocover.jpg'
import rimini from '../assets/riminicover.JPG'
import verona from '../assets/veronacover.JPG'
import colmar from '../assets/colmarcover.JPG'



//Testament
import slika0_0 from '../assets/testament/IMG_9587.jpg'
import slika0_1 from  '../assets/testament/IMG_9599.jpg'
import slika0_2 from '../assets/testament/IMG_9665.jpg'
import slika0_3 from '../assets/testament/IMG_9688.jpg'
import slika0_4 from '../assets/testament/IMG_9705.jpg'
import slika0_5 from '../assets/testament/IMG_9710.jpg'
import slika0_6 from '../assets/testament/IMG_9715.jpg'
import slika0_7 from '../assets/testament/IMG_9732.jpg'
import slika0_8 from '../assets/testament/IMG_9753.jpg'
import slika0_9 from '../assets/testament/IMG_9756.jpg'
import slika0_10 from '../assets/testament/IMG_9764.jpg'
import slika0_11 from '../assets/testament/IMG_9800.jpg'
import slika0_12 from '../assets/testament/IMG_9804.jpg'
import slika0_13 from '../assets/testament/IMG_9807.jpg'
import slika0_14 from '../assets/testament/IMG_9810.jpg'
import slika0_15 from '../assets/testament/IMG_9816.jpg'
import slika0_16 from '../assets/testament/IMG_9840.jpg'
import slika0_17 from '../assets/testament/IMG_9819.jpg'
import slika0_18 from '../assets/testament/IMG_9888.jpg'
import slika0_19 from '../assets/testament/IMG_9873.jpg'


import slikav_0 from '../assets/vatrogasci/IMG_7368.jpg'
import slikav_1 from '../assets/vatrogasci/IMG_7443.jpg'
import slikav_2 from '../assets/vatrogasci/IMG_7490.jpg'
import slikav_3 from '../assets/vatrogasci/IMG_7518.jpg'
import slikav_4 from '../assets/vatrogasci/IMG_7563.jpg'
import slikav_5 from '../assets/vatrogasci/IMG_7623.jpg'
import slikav_6 from '../assets/vatrogasci/IMG_7726.jpg'
import slikav_7 from '../assets/vatrogasci/IMG_7849.jpg'
import slikav_8 from '../assets/vatrogasci/IMG_7879.jpg'
import slikav_9 from '../assets/vatrogasci/IMG_7879.jpg'
import slikav_10 from '../assets/vatrogasci/IMG_7857.jpg'
import slikav_11 from '../assets/vatrogasci/IMG_7916.jpg'
import slikav_12 from '../assets/vatrogasci/IMG_7978.jpg'
import slikav_13 from '../assets/vatrogasci/IMG_8275.jpg'
import slikav_14 from '../assets/vatrogasci/IMG_8513.jpg'

import slikav_0i from '../assets/smotra/slikas.jpg'
import slikav_1i from '../assets/smotra/slikas1.jpg'

import slikav_3i from '../assets/smotra/slikas3.jpg'
import slikav_4i from '../assets/smotra/slikas4.jpg'
import slikav_5i from '../assets/smotra/slikas5.jpg'
import slikav_6i from '../assets/smotra/slikas6.jpg'
import slikav_7i from '../assets/smotra/slikas7.jpg'
import slikav_8i from '../assets/smotra/slikas8.jpg'
import slikav_9i from '../assets/smotra/slikas9.jpg'
import slikav_10i from '../assets/smotra/slikas10.jpg'
import slikav_11i from '../assets/smotra/slikas11.jpg'
import slikav_12i from '../assets/smotra/slikas12.jpg'
import slikav_13i from '../assets/smotra/slikas13.jpg'
import slikav_14i from '../assets/smotra/slikas14.jpg'
import slikav_15i from '../assets/smotra/slikas15.jpg'
import slikav_16i from '../assets/smotra/slikas16.jpg'
import slikav_17i from '../assets/smotra/slikas17.jpg'
import slikav_18i from '../assets/smotra/slikas18.jpg'
import slikav_19i from '../assets/smotra/slikas19.jpg'
import slikav_20i from '../assets/smotra/slikas20.jpg'
import slikav_21i from '../assets/smotra/slikas21.jpg'
import slikav_22i from '../assets/smotra/slikas22.jpg'
import slikav_23i from '../assets/smotra/slikas23.jpg'
import slikav_24i from '../assets/smotra/slikas24.jpg'
import slikav_25i from '../assets/smotra/slikas25.jpg'
import slikav_26i from '../assets/smotra/slikas26.jpg'
import slikav_27i from '../assets/smotra/slikas27.jpg'
import slikav_28i from '../assets/smotra/slikas28.jpg'


import slikavik_0 from '../assets/nocilahija/slika0.jpg'
import slikavik_1 from '../assets/nocilahija/slika1.jpg'
import slikavik_2 from '../assets/nocilahija/slika2.jpg'
import slikavik_3 from '../assets/nocilahija/slika3.jpg'
import slikavik_4 from '../assets/nocilahija/slika4.jpg'
import slikavik_5 from '../assets/nocilahija/slika5.jpg'
import slikavik_6 from '../assets/nocilahija/slika6.jpg'
import slikavik_7 from '../assets/nocilahija/slika7.jpg'
import slikavik_8 from '../assets/nocilahija/slika8.jpg'

import slikafk0 from '../assets/fk/IMG_0440.jpg'
import slikafk1 from '../assets/fk/IMG_0414.jpg'
import slikafk2 from '../assets/fk/IMG_0394.jpg'
import slikafk3 from '../assets/fk/IMG_0491.jpg'
import slikafk4 from '../assets/fk/IMG_0726.jpg'
import slikafk5 from '../assets/fk/IMG_2066.jpg'
import slikafk6 from '../assets/fk/IMG_2180.jpg'
import slikafk7 from '../assets/fk/IMG_2309.jpg'
import slikafk8 from '../assets/fk/IMG_2473.jpg'
import slikafk9 from '../assets/fk/IMG_2495.jpg'
import slikafk10 from '../assets/fk/IMG_2572.jpg'
import slikafk11 from '../assets/fk/IMG_5220.jpg'
import slikafk12 from '../assets/fk/IMG_5314.jpg'
import slikafk13 from '../assets/fk/IMG_5360.jpg'

import slikakmf0 from '../assets/kmf/IMG_1625.jpg'
import slikakmf1 from '../assets/kmf/IMG_1692.jpg'
import slikakmf2 from '../assets/kmf/IMG_1663.jpg'
import slikakmf3 from '../assets/kmf/IMG_1710.jpg'
import slikakmf4 from '../assets/kmf/IMG_1727.jpg'
import slikakmf5 from '../assets/kmf/IMG_1764.jpg'
import slikakmf6 from '../assets/kmf/IMG_1843.jpg'
import slikakmf7 from '../assets/kmf/IMG_1879.jpg'
import slikakmf8 from '../assets/kmf/IMG_1959.jpg'
import slikakmf9 from '../assets/kmf/IMG_2056.jpg'
import slikakmf10 from '../assets/kmf/IMG_2138.jpg'
import slikakmf11 from '../assets/kmf/IMG_2158.jpg'
import slikakmf12 from '../assets/kmf/IMG_3413.jpg'
import slikakmf13 from '../assets/kmf/IMG_3417.jpg'
import slikakmf14 from '../assets/kmf/IMG_3693.jpg'
import slikakmf15 from '../assets/kmf/IMG_6622.jpg'
import slikakmf16 from '../assets/kmf/IMG_6645.jpg'
import slikakmf17 from '../assets/kmf/IMG_6741.jpg'
import slikakmf18 from '../assets/kmf/IMG_6772.jpg'
import slikakmf19 from '../assets/kmf/IMG_6860.jpg'
import slikakmf20 from '../assets/kmf/IMG_6892.jpg'
import slikakmf21 from '../assets/kmf/IMG_7132.jpg'
import slikakmf22 from '../assets/kmf/IMG_7270.jpg'

import slikaes0 from '../assets/elvedin_semina/IMG_0166.jpg'
import slikaes1 from '../assets/elvedin_semina/IMG_0170.jpg'
import slikaes2 from '../assets/elvedin_semina/IMG_0161.jpg'
import slikaes3 from '../assets/elvedin_semina/IMG_0172.jpg'
import slikaes4 from '../assets/elvedin_semina/IMG_0203.jpg'
import slikaes5 from '../assets/elvedin_semina/IMG_0221.jpg'
import slikaes6 from '../assets/elvedin_semina/IMG_0239.jpg'
import slikaes7 from '../assets/elvedin_semina/IMG_0243.jpg'
import slikaes8 from '../assets/elvedin_semina/IMG_0277.jpg'

import slikeaa0 from '../assets/anes_ajla/IMG_2834.jpg'
import slikeaa1 from '../assets/anes_ajla/IMG_2831.jpg'
import slikeaa2 from '../assets/anes_ajla/IMG_2853.jpg'
import slikeaa3 from '../assets/anes_ajla/IMG_3227.jpg'
import slikeaa4 from '../assets/anes_ajla/IMG_3757.jpg'
import slikeaa5 from '../assets/anes_ajla/IMG_3768.jpg'
import slikeaa6 from '../assets/anes_ajla/IMG_3801.jpg'

//Matura MSS Travnik 25
import slikamss0 from '../assets/msstravnik/IMG_8640.jpg'
import slikamss1 from '../assets/msstravnik/IMG_8646.jpg'
import slikamss2 from '../assets/msstravnik/IMG_8666.jpg'
import slikamss3 from '../assets/msstravnik/IMG_8705.jpg'
import slikamss4 from '../assets/msstravnik/IMG_8740.jpg'
import slikamss5 from '../assets/msstravnik/IMG_8776.jpg'
import slikamss6 from '../assets/msstravnik/IMG_8814.jpg'
import slikamss7 from '../assets/msstravnik/IMG_8913.jpg'
import slikamss8 from '../assets/msstravnik/IMG_8919.jpg'
import slikamss9 from '../assets/msstravnik/IMG_8966.jpg'
import slikamss10 from '../assets/msstravnik/IMG_8990.jpg'
import slikamss11 from '../assets/msstravnik/IMG_9051.jpg'
import slikamss12 from '../assets/msstravnik/IMG_9074.jpg'
import slikamss13 from '../assets/msstravnik/IMG_9141.jpg'
import slikamss14 from '../assets/msstravnik/IMG_9148.jpg'
import slikamss15 from '../assets/msstravnik/IMG_9195.jpg'
import slikamss16 from '../assets/msstravnik/IMG_9221.jpg'
import slikamss17 from '../assets/msstravnik/IMG_9235.jpg'
import slikamss18 from '../assets/msstravnik/IMG_9263.jpg'
import slikamss19 from '../assets/msstravnik/IMG_9282.jpg'
import slikamss20 from '../assets/msstravnik/IMG_9328.jpg'
import slikamss21 from '../assets/msstravnik/IMG_9356.jpg'
import slikamss22 from '../assets/msstravnik/IMG_9801.jpg'
import slikamss23 from '../assets/msstravnik/IMG_9901.jpg'
import slikamss24 from '../assets/msstravnik/slikadeni.jpg'
import slikamss25 from '../assets/msstravnik/slikadeni0.jpg'
import slikamss26 from '../assets/msstravnik/slikadeni1.jpg'
import slikamss27 from '../assets/msstravnik/slikadeni2.jpg'
import slikamss28 from '../assets/msstravnik/slikadeni3.jpg'
import slikamss29 from '../assets/msstravnik/slikadeni4.jpg'
import slikamss30 from '../assets/msstravnik/slikadeni5.jpg'
import slikamss31 from '../assets/msstravnik/slikadeni6.jpg'

//Matura Vitez 25
import slikamssv from '../assets/mssvitez/IMG_7691.jpg'
import slikamssv1 from '../assets/mssvitez/IMG_7708.jpg'
import slikamssv2 from '../assets/mssvitez/IMG_8008.jpg'
import slikamssv3 from '../assets/mssvitez/IMG_8307.jpg'
import slikamssv4 from '../assets/mssvitez/IMG_8316.jpg'
import slikamssv5 from '../assets/mssvitez/IMG_8326.jpg'
import slikamssv6 from '../assets/mssvitez/IMG_8334.jpg'
import slikamssv7 from '../assets/mssvitez/IMG_8341.jpg'
import slikamssv8 from '../assets/mssvitez/IMG_8351.jpg'
import slikamssv9 from '../assets/mssvitez/IMG_8413.jpg'
import slikamssv10 from '../assets/mssvitez/IMG_8419.jpg'
import slikamssv11 from '../assets/mssvitez/IMG_8494.jpg'
import slikamssv12 from '../assets/mssvitez/IMG_8510.jpg'
import slikamssv13 from '../assets/mssvitez/IMG_8523.jpg'

//Matura MSTS 25
import slikamsts from '../assets/msts/ibro.jpg'
import slikamsts1 from '../assets/msts/ibro1.jpg'
import slikamsts2 from '../assets/msts/ibro2.jpg'
import slikamsts3 from '../assets/msts/ibro3.jpg'
import slikamsts4 from '../assets/msts/ibro4.jpg'
import slikamsts5 from '../assets/msts/IMG_5766.jpg'
import slikamsts6 from '../assets/msts/IMG_5773.jpg'
import slikamsts7 from '../assets/msts/IMG_5778.jpg'
import slikamsts8 from '../assets/msts/IMG_5802.jpg'
import slikamsts9 from '../assets/msts/IMG_5850.jpg'
import slikamsts10 from '../assets/msts/IMG_5887.jpg'
import slikamsts11 from '../assets/msts/IMG_6033.jpg'

//Emanulah Dzenita
import slikaedz from '../assets/emanulah_dzenita/IMG_4696.jpg'
import slikaedz1 from '../assets/emanulah_dzenita/IMG_4702.jpg'
import slikaedz2 from '../assets/emanulah_dzenita/IMG_4881.jpg'
import slikaedz3 from '../assets/emanulah_dzenita/IMG_4884.jpg'
import slikaedz4 from '../assets/emanulah_dzenita/IMG_5313.jpg'
import slikaedz5 from '../assets/emanulah_dzenita/IMG_5315.jpg'
import slikaedz6 from '../assets/emanulah_dzenita/IMG_5496.jpg'
import slikaedz7 from '../assets/emanulah_dzenita/IMG_5506_1.jpg'
import slikaedz8 from '../assets/emanulah_dzenita/IMG_5525-2.jpg'
import slikaedz9 from '../assets/emanulah_dzenita/IMG_5532-2.jpg'
import slikaedz10 from '../assets/emanulah_dzenita/IMG_5587.jpg'

//Nemrin Zahida
import slikanz from '../assets/nermin_zahida/IMG_0828.jpg'
import slikanz1 from '../assets/nermin_zahida/IMG_0853.jpg'
import slikanz2 from '../assets/nermin_zahida/IMG_0871.jpg'
import slikanz3 from '../assets/nermin_zahida/IMG_0910.jpg'
import slikanz4 from '../assets/nermin_zahida/IMG_0923.jpg'
import slikanz5 from '../assets/nermin_zahida/IMG_0946.jpg'
import slikanz6 from '../assets/nermin_zahida/IMG_0953.jpg'
import slikanz7 from '../assets/nermin_zahida/IMG_0969.jpg'
import slikanz8 from '../assets/nermin_zahida/IMG_0999.jpg'
import slikanz9 from '../assets/nermin_zahida/IMG_1025.jpg'

//Graz
import slikagraz from '../assets/graz/IMG_2158.jpg'
import slikagraz1 from '../assets/graz/IMG_1962.jpg'
import slikagraz2 from '../assets/graz/IMG_1971.jpg'
import slikagraz3 from '../assets/graz/IMG_1985.jpg'
import slikagraz4 from '../assets/graz/IMG_1987.jpg'
import slikagraz5 from '../assets/graz/IMG_1993.jpg'
import slikagraz6 from '../assets/graz/IMG_1995.jpg'
import slikagraz7 from '../assets/graz/IMG_1996.jpg'
import slikagraz9 from '../assets/graz/IMG_2005.jpg'
import slikagraz10 from '../assets/graz/IMG_2006.jpg'
import slikagraz12 from '../assets/graz/IMG_2007.jpg'
import slikagraz13 from '../assets/graz/IMG_2008.jpg'
import slikagraz14 from '../assets/graz/IMG_2014.jpg'
import slikagraz15 from '../assets/graz/IMG_2025.jpg'
import slikagraz16 from '../assets/graz/IMG_2029.jpg'
import slikagraz17 from '../assets/graz/IMG_2096.jpg'
import slikagraz18 from '../assets/graz/IMG_2097.jpg'
import slikagraz19 from '../assets/graz/IMG_2098.jpg'
import slikagraz20 from '../assets/graz/IMG_2101.jpg'
import slikagraz21 from '../assets/graz/IMG_2148.jpg'
import slikagraz22 from '../assets/graz/IMG_2149.jpg'
import slikagraz23 from '../assets/graz/IMG_2151.jpg'
import slikagraz24 from '../assets/graz/IMG_2171.jpg'
import slikagraz25 from '../assets/graz/IMG_2172.jpg'
import slikagraz26 from '../assets/graz/IMG_2182.jpg'
import slikagraz27 from '../assets/graz/IMG_2184.jpg'
import slikagraz28 from '../assets/graz/IMG_2212.jpg'
import slikagraz29 from '../assets/graz/IMG_2217.jpg'
import slikagraz30 from '../assets/graz/IMG_2219.jpg'
import slikagraz31 from '../assets/graz/IMG_2220.jpg'

//Dzejlan-kumstvo
import slikadzejlana from '../assets/kumstvo/dzejlana0.jpg'
import slikadzejlana1 from '../assets/kumstvo/dzejlana1.jpg'
import slikadzejlana2 from '../assets/kumstvo/dzejlana2.jpg'
import slikadzejlana3 from '../assets/kumstvo/dzejlana3.jpg'
import slikadzejlana4 from '../assets/kumstvo/dzejlana4.jpg'
import slikadzejlana5 from '../assets/kumstvo/dzejlana5.jpg'
import slikadzejlana6 from '../assets/kumstvo/dzejlana6.jpg'
import slikadzejlana7 from '../assets/kumstvo/dzejlana7.jpg'
import slikadzejlana8 from '../assets/kumstvo/dzejlana8.jpg'
import slikadzejlana9 from '../assets/kumstvo/dzejlana9.jpg'
import slikadzejlana10 from '../assets/kumstvo/dzejlana10.jpg'
import slikadzejlana11 from '../assets/kumstvo/dzejlana11.jpg'
import slikadzejlana12 from '../assets/kumstvo/dzejlana12.jpg'
import slikadzejlana20 from '../assets/kumstvo/dzejlana13.jpg'
import slikadzejlana13 from '../assets/kumstvo/dzejlana14.jpg'
import slikadzejlana14 from '../assets/kumstvo/dzejlana15.jpg'
import slikadzejlana15 from '../assets/kumstvo/dzejlana16.jpg'
import slikadzejlana16 from '../assets/kumstvo/dzejlana17.jpg'
import slikadzejlana17 from '../assets/kumstvo/dzejlana18.jpg'
import slikadzejlana18 from '../assets/kumstvo/dzejlana19.jpg'
import slikadzejlana19 from '../assets/kumstvo/dzejlana20.jpg'

//Zaručivanje Aras
import slikaaras from '../assets/aras/aras1.jpg'
import slikaaras1 from '../assets/aras/aras2.jpg'
import slikaaras2 from '../assets/aras/aras3.jpg'
import slikaaras3 from '../assets/aras/aras4.jpg'
import slikaaras4 from '../assets/aras/aras5.jpg'

//Ajna Islamovic svadba
import slikaajnai from '../assets/ajna_islamovic/ajnai.jpg'
import slikaajnai1 from '../assets/ajna_islamovic/ajnai1.jpg'
import slikaajnai2 from '../assets/ajna_islamovic/ajnai2.jpg'
import slikaajnai3 from '../assets/ajna_islamovic/ajnai3.jpg'
import slikaajnai4 from '../assets/ajna_islamovic/ajnai4.jpg'
import slikaajnai5 from '../assets/ajna_islamovic/ajnai5.jpg'
import slikaajnai6 from '../assets/ajna_islamovic/ajnai6.jpg'
import slikaajnai7 from '../assets/ajna_islamovic/ajnai7.jpg'
import slikaajnai8 from '../assets/ajna_islamovic/ajnai8.jpg'

//Enes Danijela
import slikaenesdanijela from '../assets/enes_danijela/enesdanijela0.jpg'
import slikaenesdanijela1 from '../assets/enes_danijela/enesdanijela1.jpg'
import slikaenesdanijela2 from '../assets/enes_danijela/enesdanijela2.jpg'
import slikaenesdanijela3 from '../assets/enes_danijela/enesdanijela3.jpg'
import slikaenesdanijela4 from '../assets/enes_danijela/enesdanijela4.jpg'
import slikaenesdanijela5 from '../assets/enes_danijela/enesdanijela5.jpg'
import slikaenesdanijela6 from '../assets/enes_danijela/enesdanijela6.jpg'
import slikaenesdanijela7 from '../assets/enes_danijela/enesdanijela7.jpg'
import slikaenesdanijela8 from '../assets/enes_danijela/enesdanijela8.jpg'
import slikaenesdanijela9 from '../assets/enes_danijela/enesdanijela9.jpg'
import slikaenesdanijela10 from '../assets/enes_danijela/enesdanijela10.jpg'
import slikaenesdanijela11 from '../assets/enes_danijela/enesdanijela11.jpg'
import slikaenesdanijela12 from '../assets/enes_danijela/enesdanijela12.jpg'
import slikaenesdanijela13 from '../assets/enes_danijela/enesdanijela13.jpg'
import slikaenesdanijela15 from '../assets/enes_danijela/enesdanijela15.jpg'

//Venecija
import venecija0 from '../assets/venecija/venecija0.jpg'
import venecija1 from '../assets/venecija/venecija1.jpg'
import venecija2 from '../assets/venecija/venecija2.jpg'
import venecija3 from '../assets/venecija/venecija3.jpg'
import venecija4 from '../assets/venecija/venecija4.jpg'
import venecija5 from '../assets/venecija/venecija5.jpg'
import venecija6 from '../assets/venecija/venecija6.jpg'
import venecija7 from '../assets/venecija/venecija7.jpg'
import venecija8 from '../assets/venecija/venecija8.jpg'
import venecija9 from '../assets/venecija/venecija9.jpg'
import venecija10 from '../assets/venecija/venecija10.jpg'
import venecija11 from '../assets/venecija/venecija11.jpg'
import venecija12 from '../assets/venecija/venecija12.jpg'
import venecija13 from '../assets/venecija/venecija13.jpg'
import venecija14 from '../assets/venecija/venecija14.jpg'
import venecija15 from '../assets/venecija/venecija15.jpg'
import venecija16 from '../assets/venecija/venecija16.jpg'
import venecija17 from '../assets/venecija/venecija17.jpg'
import venecija18 from '../assets/venecija/venecija18.jpg'

//San Marino
import sanmarino0 from '../assets/san marino/sanmarino0.jpg'
import sanmarino1 from '../assets/san marino/sanmarino1.jpg'
import sanmarino2 from '../assets/san marino/sanmarino2.jpg'
import sanmarino3 from '../assets/san marino/sanmarino3.jpg'
import sanmarino4 from '../assets/san marino/sanmarino4.jpg'
import sanmarino5 from '../assets/san marino/sanmarino5.jpg'
import sanmarino6 from '../assets/san marino/sanmarino6.jpg'
import sanmarino7 from '../assets/san marino/sanmarino7.jpg'
import sanmarino8 from '../assets/san marino/sanmarino8.jpg'
import sanmarino9 from '../assets/san marino/sanmarino9.jpg'
import sanmarino10 from '../assets/san marino/sanmarino10.jpg'
import sanmarino11 from '../assets/san marino/sanmarino11.jpg'
import sanmarino12 from '../assets/san marino/sanmarino12.jpg'
import sanmarino13 from '../assets/san marino/sanmarino13.jpg'
import sanmarino14 from '../assets/san marino/sanmarino14.jpg'
import sanmarino15 from '../assets/san marino/sanmarino15.jpg'

//Rimini
import rimini0 from '../assets/rimini/rimini-01.jpg'
import rimini1 from '../assets/rimini/rimini-02.jpg'
import rimini2 from '../assets/rimini/rimini-03.jpg'
import rimini3 from '../assets/rimini/rimini-04.jpg'
import rimini4 from '../assets/rimini/rimini-05.jpg'
import rimini5 from '../assets/rimini/rimini-06.jpg'
import rimini6 from '../assets/rimini/rimini-07.jpg'
import rimini7 from '../assets/rimini/rimini-08.jpg'
import rimini8 from '../assets/rimini/rimini-09.jpg'
import rimini9 from '../assets/rimini/rimini-10.jpg'
import rimini10 from '../assets/rimini/rimini-11.jpg'

//Verona
import verona0 from '../assets/verona/verona-01.jpg'
import verona1 from '../assets/verona/verona-02.jpg'
import verona2 from '../assets/verona/verona-03.jpg'
import verona3 from '../assets/verona/verona-04.jpg'
import verona4 from '../assets/verona/verona-05.jpg'
import verona5 from '../assets/verona/verona-06.jpg'
import verona6 from '../assets/verona/verona-07.jpg'
import verona7 from '../assets/verona/verona-08.jpg'
import verona8 from '../assets/verona/verona-09.jpg'
import verona9 from '../assets/verona/verona-10.jpg'
import verona10 from '../assets/verona/verona-11.jpg'
import verona11 from '../assets/verona/verona-12.jpg'
import verona12 from '../assets/verona/verona-13.jpg'
import verona13 from '../assets/verona/verona-14.jpg'
import verona14 from '../assets/verona/verona-15.jpg'
import verona15 from '../assets/verona/verona-16.jpg'
import verona16 from '../assets/verona/verona-17.jpg'
import verona17 from '../assets/verona/verona-18.jpg'
import verona18 from '../assets/verona/verona-19.jpg'
import verona19 from '../assets/verona/verona-20.jpg'

//Colmar
import colmar0 from '../assets/colmar/colmar-01.jpg'
import colmar1 from '../assets/colmar/colmar-02.jpg'
import colmar2 from '../assets/colmar/colmar-03.jpg'
import colmar3 from '../assets/colmar/colmar-04.jpg'
import colmar4 from '../assets/colmar/colmar-05.jpg'
import colmar5 from '../assets/colmar/colmar-06.jpg'
import colmar6 from '../assets/colmar/colmar-07.jpg'
import colmar7 from '../assets/colmar/colmar-08.jpg'
import colmar8 from '../assets/colmar/colmar-09.jpg'
import colmar9 from '../assets/colmar/colmar-10.jpg'
import colmar10 from '../assets/colmar/colmar-11.jpg'
import colmar11 from '../assets/colmar/colmar-12.jpg'
import colmar12 from '../assets/colmar/colmar-13.jpg'
import colmar13 from '../assets/colmar/colmar-14.jpg'
import colmar14 from '../assets/colmar/colmar-15.jpg'
import colmar15 from '../assets/colmar/colmar-16.jpg'
import colmar16 from '../assets/colmar/colmar-17.jpg'
import colmar17 from '../assets/colmar/colmar-18.jpg'
import colmar18 from '../assets/colmar/colmar-19.jpg'
import colmar19 from '../assets/colmar/colmar-20.jpg'




const EventDetail = () => {
    const { eventId } = useParams();

    // Mock event data - in a real app, this would come from an API
    const eventData = {
        'enes_danijela': {
            title: 'Enes & Danijela',
            description: '',
            date: '07.02.2026.',
            location: 'Etno selo Čardaci Vitez, BiH',
            coverImage: enesdanijela,
            images: [
                { id: '1', src: slikaenesdanijela, alt: 'Wedding ceremony' },
                { id: '2', src: slikaenesdanijela1, alt: 'Bride and groom portrait' },
                { id: '3', src: slikaenesdanijela2, alt: 'Wedding details' },
                { id: '4', src: slikaenesdanijela3, alt: 'Wedding party' },
                { id: '5', src: slikaenesdanijela4, alt: 'First dance' },
                { id: '6', src: slikaenesdanijela5, alt: 'First dance' },
                { id: '7', src: slikaenesdanijela6, alt: 'First dance' },
                { id: '8', src: slikaenesdanijela7, alt: 'First dance' },
                { id: '9', src: slikaenesdanijela8, alt: 'First dance' },
                { id: '10', src: slikaenesdanijela9, alt: 'First dance' },
                { id: '11', src: slikaenesdanijela10, alt: 'First dance' },
                { id: '13', src: slikaenesdanijela11, alt: 'First dance' },
                { id: '14', src: slikaenesdanijela12, alt: 'First dance' },
                { id: '15', src: slikaenesdanijela13, alt: 'First dance' },
                { id: '16', src: slikaenesdanijela15, alt: 'First dance' },


            ],
        },
        'Ajna_islamovic_slike': {
            title: 'Ajna Islamović - portret sesija',
            description: '',
            date: '06.02.2026.',
            location: 'Etno selo Čardaci Vitez, BiH',
            coverImage: ajnai,
            images: [
                { id: '1', src: slikaajnai, alt: 'Wedding ceremony' },
                { id: '2', src: slikaajnai1, alt: 'Bride and groom portrait' },
                { id: '3', src: slikaajnai2, alt: 'Wedding details' },
                { id: '4', src: slikaajnai3, alt: 'Wedding party' },
                { id: '5', src: slikaajnai4, alt: 'First dance' },
                { id: '6', src: slikaajnai5, alt: 'First dance' },
                { id: '7', src: slikaajnai6, alt: 'First dance' },
                { id: '8', src: slikaajnai7, alt: 'First dance' },
                { id: '9', src: slikaajnai8, alt: 'First dance' },


            ],
        },
        'Zarucivanje_aras': {
            title: 'Galerija slika iz Graza.',
            description: '',
            date: '25.01.2026.',
            location: 'Travnik, BiH',
            coverImage: aras,
            images: [
                { id: '1', src: slikaaras, alt: 'Wedding ceremony' },
                { id: '2', src: slikaaras1, alt: 'Bride and groom portrait' },
                { id: '4', src: slikaaras2, alt: 'Wedding details' },
                { id: '5', src: slikaaras3, alt: 'Wedding party' },
                { id: '6', src: slikaaras4, alt: 'Wedding party' },

            ],
        },

        'Kumstvo_Dzejalana': {
            title: 'Galerija slika kumstva.',
            description: '',
            date: '04.01.2026.',
            location: 'Restoran Bistrovo Kruščica Vitez, BiH',
            coverImage: dzejlanakumstvo,
            images: [
                { id: '1', src: slikadzejlana, alt: 'Wedding ceremony' },
                { id: '2', src: slikadzejlana1, alt: 'Bride and groom portrait' },
                { id: '4', src: slikadzejlana2, alt: 'Wedding details' },
                { id: '5', src: slikadzejlana3, alt: 'Wedding party' },
                { id: '6', src: slikadzejlana4, alt: 'First dance' },
                { id: '7', src: slikadzejlana5, alt: 'First dance' },
                { id: '8', src: slikadzejlana6, alt: 'First dance' },
                { id: '9', src: slikadzejlana7, alt: 'First dance' },
                { id: '11', src: slikadzejlana8, alt: 'First dance' },
                { id: '12', src: slikadzejlana9, alt: 'First dance' },
                { id: '14', src: slikadzejlana10, alt: 'First dance' },
                { id: '15', src: slikadzejlana11, alt: 'First dance' },
                { id: '16', src: slikadzejlana12, alt: 'First dance' },
                { id: '17', src: slikadzejlana13, alt: 'First dance' },
                { id: '18', src: slikadzejlana14, alt: 'First dance' },
                { id: '19', src: slikadzejlana15, alt: 'First dance' },
                { id: '20', src: slikadzejlana16, alt: 'First dance' },
                { id: '21', src: slikadzejlana17, alt: 'First dance' },
                { id: '22', src: slikadzejlana18, alt: 'First dance' },
                { id: '23', src: slikadzejlana19, alt: 'First dance' },
                { id: '24', src: slikadzejlana20, alt: 'First dance' },
            ],
        },
        'Graz': {
            title: 'Galerija slika iz Graza.',
            description: '',
            date: '29.11.2025.',
            location: 'Graz, Austrija',
            coverImage: graz,
            images: [
                { id: '1', src: slikagraz, alt: 'Wedding ceremony' },
                { id: '2', src: slikagraz1, alt: 'Bride and groom portrait' },
                { id: '4', src: slikagraz2, alt: 'Wedding details' },
                { id: '5', src: slikagraz3, alt: 'Wedding party' },
                { id: '6', src: slikagraz4, alt: 'First dance' },
                { id: '7', src: slikagraz5, alt: 'First dance' },
                { id: '8', src: slikagraz6, alt: 'First dance' },
                { id: '9', src: slikagraz7, alt: 'First dance' },
                { id: '11', src: slikagraz9, alt: 'First dance' },
                { id: '12', src: slikagraz10, alt: 'First dance' },
                { id: '14', src: slikagraz12, alt: 'First dance' },
                { id: '15', src: slikagraz13, alt: 'First dance' },
                { id: '16', src: slikagraz14, alt: 'First dance' },
                { id: '17', src: slikagraz15, alt: 'First dance' },
                { id: '18', src: slikagraz16, alt: 'First dance' },
                { id: '19', src: slikagraz17, alt: 'First dance' },
                { id: '20', src: slikagraz18, alt: 'First dance' },
                { id: '21', src: slikagraz19, alt: 'First dance' },
                { id: '22', src: slikagraz20, alt: 'First dance' },
                { id: '23', src: slikagraz21, alt: 'First dance' },
                { id: '24', src: slikagraz22, alt: 'First dance' },
                { id: '25', src: slikagraz23, alt: 'First dance' },
                { id: '26', src: slikagraz24, alt: 'First dance' },
                { id: '27', src: slikagraz25, alt: 'First dance' },
                { id: '28', src: slikagraz26, alt: 'First dance' },
                { id: '29', src: slikagraz27, alt: 'First dance' },
                { id: '30', src: slikagraz28, alt: 'First dance' },
                { id: '31', src: slikagraz29, alt: 'First dance' },
                { id: '32', src: slikagraz30, alt: 'First dance' },
                { id: '33', src: slikagraz31, alt: 'First dance' },

            ],
        },
        'noc-ilahija-kasida': {
            title: 'Noć ilahija i Kasida',
            description: '5. Festival ilahija i kasida "Vjetar aška". Učesnici festivala su Hor BZK preporod Gornji Vakuf, Vis Merak Sapna i Hor Janja Bilal. BZK Općinsko društvo Vitez je poklonila gradu još jednu prelijepu manifestaciju koja je bula puna emocija i ljubavi! Naljepši dio manifestacije svakako je zajednička ilahija svih učesnika koju smo izveli u spomen i sjećanje rahmetli Halida Bešlića.',
            date: '18.10.2025.',
            location: 'Kino sala Vitez, BiH',
            coverImage: ilahija,
            images: [
                { id: '1', src: slikavik_0, alt: 'Wedding ceremony' },
                { id: '2', src: slikavik_1, alt: 'Bride and groom portrait' },
                { id: '4', src: slikavik_2, alt: 'Wedding details' },
                { id: '5', src: slikavik_3, alt: 'Wedding party' },
                { id: '6', src: slikavik_4, alt: 'First dance' },
                { id: '7', src: slikavik_5, alt: 'First dance' },
                { id: '8', src: slikavik_6, alt: 'First dance' },
                { id: '9', src: slikavik_7, alt: 'First dance' },
                { id: '9', src: slikavik_8, alt: 'First dance' },
            ],
        },
        'premijera-filma-testament': {
            title: 'Premijera filma "Testament"',
            description: 'Premijera filma "Testament".',
            date: '23.10.2025.',
            location: 'Kino sala Vitez, BiH',
            coverImage: testament,
            images: [
                { id: '1', src: slika0_0, alt: 'Wedding ceremony' },
                { id: '2', src: slika0_1, alt: 'Bride and groom portrait' },
                { id: '3', src: slika0_2, alt: 'Wedding reception' },
                { id: '4', src: slika0_3, alt: 'Wedding details' },
                { id: '5', src: slika0_4, alt: 'Wedding party' },
                { id: '6', src: slika0_5, alt: 'First dance' },
                { id: '7', src: slika0_6, alt: 'First dance' },
                { id: '8', src: slika0_7, alt: 'First dance' },
                { id: '9', src: slika0_8, alt: 'First dance' },
                { id: '10', src: slika0_9, alt: 'First dance' },
                { id: '11', src: slika0_10, alt: 'First dance' },
                { id: '12', src: slika0_11, alt: 'First dance' },
                { id: '13', src: slika0_12, alt: 'First dance' },
                { id: '14', src: slika0_13, alt: 'First dance' },
                { id: '15', src: slika0_14, alt: 'First dance' },
                { id: '16', src: slika0_15, alt: 'First dance' },
                { id: '17', src: slika0_16, alt: 'First dance' },
                { id: '18', src: slika0_17, alt: 'First dance' },
                { id: '19', src: slika0_18, alt: 'First dance' },
                { id: '20', src: slika0_19, alt: 'First dance' },
            ],
        },
        'obiljezavanje-vatrogasaca': {
            title: 'Obilježavanje 60. godišnjice DVD Stari Vitez',
            description: 'Ovaj značajni jubilej obilježen je defileom vatrogasnih vozila kroz grad te svečanom sjednicom na kojoj su se okupili brojni uzvanici, predstavnici vatrogasnih društava iz cijele Bosne i Hercegovine i Republike Hrvatske, kao i mnogi prijatelji i podupiratelji društva. Tom prigodom, dodijeljene su zahvalnice i plakete zaslužnim pojedincima i organizacijama koji su kroz godine svojim radom i podrškom doprinijeli razvoju i uspjesima DVD-a Stari Vitez.',
            date: '23.10.2025.',
            location: 'Kino sala Vitez, BiH',
            coverImage: covervatrogasci,
            images: [
                { id: '1', src: slikav_0, alt: 'Wedding ceremony' },
                { id: '2', src: slikav_1, alt: 'Bride and groom portrait' },
                { id: '3', src: slikav_2, alt: 'Wedding reception' },
                { id: '4', src: slikav_3, alt: 'Wedding details' },
                { id: '5', src: slikav_4, alt: 'Wedding party' },
                { id: '6', src: slikav_5, alt: 'First dance' },
                { id: '7', src: slikav_6, alt: 'First dance' },
                { id: '8', src: slikav_7, alt: 'First dance' },
                { id: '9', src: slikav_8, alt: 'First dance' },
                { id: '10', src: slikav_9, alt: 'First dance' },
                { id: '11', src: slikav_10, alt: 'First dance' },
                { id: '12', src: slikav_11, alt: 'First dance' },
                { id: '13', src: slikav_12, alt: 'First dance' },
                { id: '14', src: slikav_13, alt: 'First dance' },
                { id: '15', src: slikav_14, alt: 'First dance' },
            ],
        },
        'fk-vitez': {
            title: 'Galerija slika FK Vitez ',
            description: 'Galerija slika fudbalera FK Vitez - sezona 2025/2026',
            date: 'Sezona 2025/2026',
            location: 'Gradski stadion Vitez',
            coverImage: fkvitez,
            images: [
                { id: '1', src: slikafk0, alt: 'Wedding ceremony' },
                { id: '2', src: slikafk1, alt: 'Bride and groom portrait' },
                { id: '4', src: slikafk2, alt: 'Wedding details' },
                { id: '5', src: slikafk3, alt: 'Wedding party' },
                { id: '6', src: slikafk4, alt: 'First dance' },
                { id: '7', src: slikafk5, alt: 'First dance' },
                { id: '8', src: slikafk6, alt: 'First dance' },
                { id: '9', src: slikafk7, alt: 'First dance' },
                { id: '10', src: slikafk8, alt: 'First dance' },
                { id: '11', src: slikafk9, alt: 'First dance' },
                { id: '12', src: slikafk10, alt: 'First dance' },
                { id: '13', src: slikafk11, alt: 'First dance' },
                { id: '14', src: slikafk12, alt: 'First dance' },
                { id: '15', src: slikafk13, alt: 'First dance' },

            ],
        },
        'kmf-vitez': {
            title: 'KMF Vitez',
            description: 'Galerija slika KMF Vitez',
            date: 'Sezona 2025/2026',
            location: 'Gradska sportska dvorana Vitez',
            coverImage: kmfvitez,
            images: [
                { id: '1', src: slikakmf0, alt: 'Wedding ceremony' },
                { id: '2', src: slikakmf1, alt: 'Bride and groom portrait' },
                { id: '4', src: slikakmf2, alt: 'Wedding details' },
                { id: '5', src: slikakmf3, alt: 'Wedding party' },
                { id: '6', src: slikakmf4, alt: 'First dance' },
                { id: '7', src: slikakmf5, alt: 'First dance' },
                { id: '8', src: slikakmf6, alt: 'First dance' },
                { id: '9', src: slikakmf7, alt: 'First dance' },
                { id: '10', src: slikakmf8, alt: 'First dance' },
                { id: '11', src: slikakmf9, alt: 'First dance' },
                { id: '12', src: slikakmf10, alt: 'First dance' },
                { id: '13', src: slikakmf11, alt: 'First dance' },
                { id: '14', src: slikakmf12, alt: 'First dance' },
                { id: '15', src: slikakmf13, alt: 'First dance' },
                { id: '16', src: slikakmf14, alt: 'First dance' },
                { id: '17', src: slikakmf15, alt: 'First dance' },
                { id: '18', src: slikakmf16, alt: 'First dance' },
                { id: '19', src: slikakmf17, alt: 'First dance' },
                { id: '20', src: slikakmf18, alt: 'First dance' },
                { id: '21', src: slikakmf19, alt: 'First dance' },
                { id: '22', src: slikakmf20, alt: 'First dance' },
                { id: '23', src: slikakmf21, alt: 'First dance' },
                { id: '24', src: slikakmf22, alt: 'First dance' },


            ],
        },
        'anes-ajla': {
            title: 'Anes & Ajla',
            description: '',
            date: '21.8.2025.',
            location: 'Busovača, BiH',
            coverImage: anesajla,
            images: [
                { id: '1', src: slikeaa0, alt: 'Wedding ceremony' },
                { id: '2', src: slikeaa1, alt: 'Bride and groom portrait' },
                { id: '4', src: slikeaa2, alt: 'Wedding details' },
                { id: '5', src: slikeaa3, alt: 'Wedding party' },
                { id: '6', src: slikeaa4, alt: 'First dance' },
                { id: '7', src: slikeaa5, alt: 'First dance' },
                { id: '8', src: slikeaa6, alt: 'First dance' },


            ],
        },
        'elvedin-semina': {
            title: 'Elvedin & Semina',
            description: '',
            date: '29.7.2025.',
            location: 'Zenica, BiH',
            coverImage: elvedin,
            images: [
                { id: '1', src: slikaes0, alt: 'Wedding ceremony' },
                { id: '2', src: slikaes1, alt: 'Bride and groom portrait' },
                { id: '4', src: slikaes2, alt: 'Wedding details' },
                { id: '5', src: slikaes3, alt: 'Wedding party' },
                { id: '6', src: slikaes4, alt: 'First dance' },
                { id: '7', src: slikaes5, alt: 'First dance' },
                { id: '8', src: slikaes6, alt: 'First dance' },
                { id: '9', src: slikaes7, alt: 'First dance' },
                { id: '10', src: slikaes8, alt: 'First dance' },

            ],
        },
        'smotra-vitez-2025': {
            title: 'Međunarodna smotra folklora Vitez 2025.',
            description: '5. Festival ilahija i kasida "Vjetar aška". Učesnici festivala su Hor BZK preporod Gornji Vakuf, Vis Merak Sapna i Hor Janja Bilal. BZK Općinsko društvo Vitez je poklonila gradu još jednu prelijepu manifestaciju koja je bula puna emocija i ljubavi! Naljepši dio manifestacije svakako je zajednička ilahija svih učesnika koju smo izveli u spomen i sjećanje rahmetli Halida Bešlića.',
            date: '18.10.2025.',
            location: 'Kino sala Vitez, BiH',
            coverImage: folklor,
            images: [
                { id: '1', src: slikav_0i, alt: 'Wedding ceremony' },
                { id: '2', src: slikav_1i, alt: 'Bride and groom portrait' },
                { id: '4', src: slikav_3i, alt: 'Wedding details' },
                { id: '5', src: slikav_4i, alt: 'Wedding party' },
                { id: '6', src: slikav_5i, alt: 'First dance' },
                { id: '7', src: slikav_6i, alt: 'First dance' },
                { id: '8', src: slikav_7i, alt: 'First dance' },
                { id: '9', src: slikav_8i, alt: 'First dance' },
                { id: '10', src: slikav_9i, alt: 'First dance' },
                { id: '11', src: slikav_10i, alt: 'First dance' },
                { id: '12', src: slikav_11i, alt: 'First dance' },
                { id: '13', src: slikav_12i, alt: 'First dance' },
                { id: '14', src: slikav_13i, alt: 'First dance' },
                { id: '15', src: slikav_14i, alt: 'First dance' },
                { id: '16', src: slikav_15i, alt: 'First dance' },
                { id: '17', src: slikav_16i, alt: 'First dance' },
                { id: '18', src: slikav_17i, alt: 'First dance' },
                { id: '19', src: slikav_18i, alt: 'First dance' },
                { id: '20', src: slikav_19i, alt: 'First dance' },
                { id: '21', src: slikav_20i, alt: 'First dance' },
                { id: '22', src: slikav_21i, alt: 'First dance' },
                { id: '23', src: slikav_22i, alt: 'First dance' },
                { id: '24', src: slikav_23i, alt: 'First dance' },
                { id: '25', src: slikav_24i, alt: 'First dance' },
                { id: '26', src: slikav_25i, alt: 'First dance' },
                { id: '27', src: slikav_26i, alt: 'First dance' },
                { id: '28', src: slikav_27i, alt: 'First dance' },
                { id: '29', src: slikav_28i, alt: 'First dance' },
            ],
        },
        'matura-mss-travnik-2025': {
            title: 'Matura mješovite srednje škole Travnik ',
            description: 'Matura MSŠ Travnik. ',
            date: '24.5.2025.',
            location: 'Travnik, BiH',
            coverImage: msstravnik,
            images: [
                { id: '1', src: slikamss0, alt: 'Wedding ceremony' },
                { id: '2', src: slikamss1, alt: 'Bride and groom portrait' },
                { id: '4', src: slikamss2, alt: 'Wedding details' },
                { id: '5', src: slikamss3, alt: 'Wedding party' },
                { id: '6', src: slikamss4, alt: 'First dance' },
                { id: '7', src: slikamss5, alt: 'First dance' },
                { id: '8', src: slikamss6, alt: 'First dance' },
                { id: '9', src: slikamss7, alt: 'First dance' },
                { id: '10', src: slikamss8, alt: 'First dance' },
                { id: '11', src: slikamss9, alt: 'First dance' },
                { id: '12', src: slikamss10, alt: 'First dance' },
                { id: '13', src: slikamss11, alt: 'First dance' },
                { id: '14', src: slikamss12, alt: 'First dance' },
                { id: '15', src: slikamss13, alt: 'First dance' },
                { id: '16', src: slikamss14, alt: 'First dance' },
                { id: '17', src: slikamss15, alt: 'First dance' },
                { id: '18', src: slikamss16, alt: 'First dance' },
                { id: '19', src: slikamss17, alt: 'First dance' },
                { id: '20', src: slikamss18, alt: 'First dance' },
                { id: '21', src: slikamss19, alt: 'First dance' },
                { id: '22', src: slikamss20, alt: 'First dance' },
                { id: '23', src: slikamss21, alt: 'First dance' },
                { id: '24', src: slikamss22, alt: 'First dance' },
                { id: '25', src: slikamss23, alt: 'First dance' },
                { id: '26', src: slikamss24, alt: 'First dance' },
                { id: '27', src: slikamss25, alt: 'First dance' },
                { id: '28', src: slikamss26, alt: 'First dance' },
                { id: '29', src: slikamss27, alt: 'First dance' },
                { id: '30', src: slikamss28, alt: 'First dance' },
                { id: '31', src: slikamss29, alt: 'First dance' },
                { id: '32', src: slikamss30, alt: 'First dance' },
                { id: '33', src: slikamss31, alt: 'First dance' },
            ],
        },
        'matura-msts-travnik-2025': {
            title: 'Matura mješovite srednje tehničke škole Travnik ',
            description: 'Matura MSTŠ Travnik. ',
            date: '17.5.2025.',
            location: 'Travnik, BiH',
            coverImage: msts,
            images: [
                { id: '1', src: slikamsts, alt: 'Wedding ceremony' },
                { id: '2', src: slikamsts1, alt: 'Bride and groom portrait' },
                { id: '3', src: slikamsts2, alt: 'Wedding details' },
                { id: '4', src: slikamsts3, alt: 'Wedding party' },
                { id: '5', src: slikamsts4, alt: 'First dance' },
                { id: '6', src: slikamsts5, alt: 'First dance' },
                { id: '7', src: slikamsts6, alt: 'First dance' },
                { id: '8', src: slikamsts7, alt: 'First dance' },
                { id: '9', src: slikamsts8, alt: 'First dance' },
                { id: '10', src: slikamsts9, alt: 'First dance' },
                { id: '11', src: slikamsts10, alt: 'First dance' },
                { id: '12', src: slikamsts11, alt: 'First dance' },

            ],
        },
        'matura-mss-vitez-2025': {
            title: 'Matura 2025. Mješovite srednje škole Vitez',
            description: 'Matura MSŠ Vitez. ',
            date: '23.5.2025.',
            location: 'Vitez, BiH',
            coverImage: mssvitez,
            images: [
                { id: '1', src: slikamssv, alt: 'Wedding ceremony' },
                { id: '2', src: slikamssv1, alt: 'Bride and groom portrait' },
                { id: '4', src: slikamssv2, alt: 'Wedding details' },
                { id: '5', src: slikamssv3, alt: 'Wedding party' },
                { id: '6', src: slikamssv4, alt: 'First dance' },
                { id: '7', src: slikamssv5, alt: 'First dance' },
                { id: '8', src: slikamssv6, alt: 'First dance' },
                { id: '9', src: slikamssv7, alt: 'First dance' },
                { id: '10', src: slikamssv8, alt: 'First dance' },
                { id: '11', src: slikamssv9, alt: 'First dance' },
                { id: '12', src: slikamssv10, alt: 'First dance' },
                { id: '13', src: slikamssv11, alt: 'First dance' },
                { id: '14', src: slikamssv12, alt: 'First dance' },
                { id: '15', src: slikamssv13, alt: 'First dance' },

            ],
        },

        'emanulah-dzenita': {
            title: 'Emanulah & Dženita',
            description: '',
            date: '27.7.2025',
            location: 'Vitez, BiH',
            coverImage: emanulah,
            images: [
                { id: '1', src: slikaedz, alt: 'Wedding ceremony' },
                { id: '2', src: slikaedz1, alt: 'Bride and groom portrait' },
                { id: '4', src: slikaedz2, alt: 'Wedding details' },
                { id: '5', src: slikaedz3, alt: 'Wedding party' },
                { id: '6', src: slikaedz4, alt: 'First dance' },
                { id: '7', src: slikaedz5, alt: 'First dance' },
                { id: '8', src: slikaedz6, alt: 'First dance' },
                { id: '9', src: slikaedz7, alt: 'First dance' },
                { id: '10', src: slikaedz8, alt: 'First dance' },
                { id: '11', src: slikaedz9, alt: 'First dance' },
                { id: '12', src: slikaedz10, alt: 'First dance' },

            ],
        },

        'nermin-zahida': {
            title: 'Nermin & Zahida',
            description: '',
            date: '11.10.2024.',
            location: 'Vitez, BiH',
            coverImage: nermin,
            images: [
                { id: '1', src: slikanz, alt: 'Wedding ceremony' },
                { id: '2', src: slikanz1, alt: 'Bride and groom portrait' },
                { id: '4', src: slikanz2, alt: 'Wedding details' },
                { id: '5', src: slikanz3, alt: 'Wedding party' },
                { id: '6', src: slikanz4, alt: 'First dance' },
                { id: '7', src: slikanz5, alt: 'First dance' },
                { id: '8', src: slikanz6, alt: 'First dance' },
                { id: '9', src: slikanz7, alt: 'First dance' },
                { id: '10', src: slikanz8, alt: 'First dance' },
                { id: '11', src: slikanz9, alt: 'First dance' },


            ],
        },
        'venecija-venice-italy': {
            title: 'Venecija',
            description: '',
            date: '17.09.2023.',
            location: 'Venecija, Italija',
            coverImage: venecija,
            images: [
                { id: '1', src: venecija0, alt: 'Wedding ceremony' },
                { id: '2', src: venecija1, alt: 'Bride and groom portrait' },
                { id: '3', src: venecija2, alt: 'Wedding details' },
                { id: '4', src: venecija3, alt: 'Wedding party' },
                { id: '5', src: venecija4, alt: 'First dance' },
                { id: '6', src: venecija5, alt: 'First dance' },
                { id: '7', src: venecija6, alt: 'First dance' },
                { id: '8', src: venecija7, alt: 'First dance' },
                { id: '9', src: venecija8, alt: 'First dance' },
                { id: '10', src: venecija9, alt: 'First dance' },
                { id: '11', src: venecija10, alt: 'First dance' },
                { id: '12', src: venecija11, alt: 'First dance' },
                { id: '13', src: venecija12, alt: 'First dance' },
                { id: '14', src: venecija13, alt: 'First dance' },
                { id: '15', src: venecija14, alt: 'First dance' },
                { id: '16', src: venecija15, alt: 'First dance' },
                { id: '17', src: venecija16, alt: 'First dance' },
                { id: '18', src: venecija17, alt: 'First dance' },
                { id: '19', src: venecija18, alt: 'First dance' },

            ],
        },
        'san-marino': {
            title: 'San Marino',
            description: '',
            date: '19.09.2023.',
            location: 'San Marino, San Marino',
            coverImage: sanmarino,
            images: [
                { id: '1', src: sanmarino0, alt: 'Wedding ceremony' },
                { id: '2', src: sanmarino1, alt: 'Bride and groom portrait' },
                { id: '3', src: sanmarino2, alt: 'Wedding details' },
                { id: '4', src: sanmarino3, alt: 'Wedding party' },
                { id: '5', src: sanmarino4, alt: 'First dance' },
                { id: '6', src: sanmarino5, alt: 'First dance' },
                { id: '7', src: sanmarino6, alt: 'First dance' },
                { id: '8', src: sanmarino7, alt: 'First dance' },
                { id: '9', src: sanmarino8, alt: 'First dance' },
                { id: '10', src: sanmarino9, alt: 'First dance' },
                { id: '11', src: sanmarino10, alt: 'First dance' },
                { id: '12', src: sanmarino11, alt: 'First dance' },
                { id: '13', src: sanmarino12, alt: 'First dance' },
                { id: '14', src: sanmarino13, alt: 'First dance' },
                { id: '15', src: sanmarino14, alt: 'First dance' },
                { id: '16', src: sanmarino15, alt: 'First dance' },
            ],
        },
        'rimini': {
            title: 'Rimini',
            description: '',
            date: '20.09.2023.',
            location: 'Rimini, Italija',
            coverImage: rimini,
            images: [
                { id: '1', src: rimini0, alt: 'Wedding ceremony' },
                { id: '2', src: rimini1, alt: 'Bride and groom portrait' },
                { id: '3', src: rimini2, alt: 'Wedding details' },
                { id: '4', src: rimini3, alt: 'Wedding party' },
                { id: '5', src: rimini4, alt: 'First dance' },
                { id: '6', src: rimini5, alt: 'First dance' },
                { id: '7', src: rimini6, alt: 'First dance' },
                { id: '8', src: rimini7, alt: 'First dance' },
                { id: '9', src: rimini8, alt: 'First dance' },
                { id: '10', src: rimini9, alt: 'First dance' },
                { id: '11', src: rimini10, alt: 'First dance' },
            ],
        },
        'verona': {
            title: 'Verona',
            description: '',
            date: '22.09.2023.',
            location: 'Verona, Italija',
            coverImage: verona,
            images: [
                { id: '1', src: verona0, alt: 'Wedding ceremony' },
                { id: '2', src: verona1, alt: 'Bride and groom portrait' },
                { id: '3', src: verona2, alt: 'Wedding details' },
                { id: '4', src: verona3, alt: 'Wedding party' },
                { id: '5', src: verona4, alt: 'First dance' },
                { id: '6', src: verona5, alt: 'First dance' },
                { id: '7', src: verona6, alt: 'First dance' },
                { id: '8', src: verona7, alt: 'First dance' },
                { id: '9', src: verona8, alt: 'First dance' },
                { id: '10', src: verona9, alt: 'First dance' },
                { id: '11', src: verona10, alt: 'First dance' },
                { id: '12', src: verona11, alt: 'Wedding ceremony' },
                { id: '13', src: verona12, alt: 'Bride and groom portrait' },
                { id: '14', src: verona13, alt: 'Wedding details' },
                { id: '15', src: verona14, alt: 'Wedding party' },
                { id: '16', src: verona15, alt: 'First dance' },
                { id: '17', src: verona16, alt: 'First dance' },
                { id: '18', src: verona17, alt: 'First dance' },
                { id: '19', src: verona18, alt: 'First dance' },
                { id: '20', src: verona19, alt: 'First dance' },
            ],
        },
        'colmar-france': {
            title: 'Colmar',
            description: '',
            date: '13.07.2022.',
            location: 'Colmar, Francuska',
            coverImage: colmar,
            images: [
                { id: '1', src: colmar0, alt: 'Wedding ceremony' },
                { id: '2', src: colmar1, alt: 'Bride and groom portrait' },
                { id: '3', src: colmar2, alt: 'Wedding details' },
                { id: '4', src: colmar3, alt: 'Wedding party' },
                { id: '5', src: colmar4, alt: 'First dance' },
                { id: '6', src: colmar5, alt: 'First dance' },
                { id: '7', src: colmar6, alt: 'First dance' },
                { id: '8', src: colmar7, alt: 'First dance' },
                { id: '9', src: colmar8, alt: 'First dance' },
                { id: '10', src: colmar9, alt: 'First dance' },
                { id: '11', src: colmar10, alt: 'First dance' },
                { id: '12', src: colmar11, alt: 'First dance' },
                { id: '13', src: colmar12, alt: 'First dance' },
                { id: '14', src: colmar13, alt: 'First dance' },
                { id: '15', src: colmar14, alt: 'First dance' },
                { id: '16', src: colmar15, alt: 'First dance' },
                { id: '17', src: colmar16, alt: 'First dance' },
                { id: '18', src: colmar17, alt: 'First dance' },
                { id: '19', src: colmar18, alt: 'First dance' },
                { id: '20', src: colmar19, alt: 'First dance' },
            ],
        },
    };

    const event = eventData[eventId];

    if (!event) {
        return (
            <div className="min-h-screen bg-white">
                <Header />.
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">Događaj nije pronađen!</h1>
                    <p className="text-gray-600 mb-8">Događaj je trenutno u obradi ili je izbrisan!</p>
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center px-6 py-3 bg-fuchsia-600 text-white font-semibold rounded-lg hover:bg-fuchsia-700 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Nazad na portfolio/galeriju
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-96 overflow-hidden">
                <img
                    src={event.coverImage}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-0 right-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-4"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Nazad na Portfolio
                        </Link>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-white"
                        >
                            {event.title}
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* Event Details */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h2 className="text-2xl font-bold text-slate-800 mb-4">O ovom događaju</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">{event.description}</p>
                            </motion.div>
                        </div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white rounded-lg shadow-md p-6"
                            >
                                <h3 className="text-xl font-semibold text-slate-800 mb-4">Detalji o događaju</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <Calendar className="h-5 w-5 text-fuchsia-600" />
                                        <span className="text-gray-600">{event.date}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <MapPin className="h-5 w-5 text-fuchsia-600" />
                                        <span className="text-gray-600">{event.location}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Camera className="h-5 w-5 text-fuchsia-600" />
                                        <span className="text-gray-600">{event.images.length} Slika</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Galerija slika</h2>
                        <ImageGallery images={event.images} />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default EventDetail;