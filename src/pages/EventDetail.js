import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';
import ReactGA from 'react-ga4';



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
import tariksajra from '../assets/tarik_sajra_cover.jpg'
import mevlehana from '../assets/mevle_hana_cover.jpg'
import harisarmina from '../assets/haris_armina_cover.jpg'
import farisadna from '../assets/faris_adna_cover.jpg'

import graz from '../assets/grazcover.jpg'
import dzejlanakumstvo from '../assets/cover_kumstvodzejlana.jpg'
import aras from '../assets/cover_aras.jpg'
import ajnai from '../assets/cover_ajnai.jpg'
import enesdanijela from '../assets/cover_naslovna_enes.jpg'
import venecija from '../assets/venecijacover2.jpg'
import sanmarino from '../assets/sanmarino_cover.JPG'
import rimini from '../assets/riminicover.JPG'
import verona from '../assets/veronacover.JPG'
import colmar from '../assets/colmarcover.JPG'
import strasburg from '../assets/strasburgcover.JPG'
import brajzah from '../assets/brajzahcover.JPG'
import freiburg from '../assets/freiburgcover.JPG'
import bajramskosijelo from "../assets/bajramskoselo_cover.jpg";

//Bajramsko sijelo
import preporod0 from '../assets/bajramsko_selo_2026/PREPOROD0.jpg'
import preporod1 from '../assets/bajramsko_selo_2026/PREPOROD1.jpg'
import preporod2 from '../assets/bajramsko_selo_2026/PREPOROD2.jpg'
import preporod3 from '../assets/bajramsko_selo_2026/PREPOROD3.jpg'
import preporod4 from '../assets/bajramsko_selo_2026/PREPOROD4.jpg'
import preporod6 from '../assets/bajramsko_selo_2026/PREPOROD6.jpg'
import preporod8 from '../assets/bajramsko_selo_2026/PREPOROD8.jpg'
import preporod10 from '../assets/bajramsko_selo_2026/PREPOROD10.jpg'
import preporod11 from '../assets/bajramsko_selo_2026/PREPOROD11.jpg'
import preporod12 from '../assets/bajramsko_selo_2026/PREPOROD12.jpg'
import preporod15 from '../assets/bajramsko_selo_2026/PREPOROD15.jpg'
import preporod16 from '../assets/bajramsko_selo_2026/PREPOROD16.jpg'
import preporod17 from '../assets/bajramsko_selo_2026/PREPOROD17.jpg'
import preporod18 from '../assets/bajramsko_selo_2026/PREPOROD18.jpg'
import preporod20 from '../assets/bajramsko_selo_2026/PREPOROD20.jpg'
import preporod22 from '../assets/bajramsko_selo_2026/PREPOROD22.jpg'
import preporod23 from '../assets/bajramsko_selo_2026/PREPOROD23.jpg'
import preporod24 from '../assets/bajramsko_selo_2026/PREPOROD24.jpg'
import preporod27 from '../assets/bajramsko_selo_2026/PREPOROD27.jpg'
import preporod28 from '../assets/bajramsko_selo_2026/PREPOROD28.jpg'
import preporod29 from '../assets/bajramsko_selo_2026/PREPOROD29.jpg'
import preporod30 from '../assets/bajramsko_selo_2026/PREPOROD30.jpg'
import preporod31 from '../assets/bajramsko_selo_2026/PREPOROD31.jpg'
import preporod32 from '../assets/bajramsko_selo_2026/PREPOROD32.jpg'
import preporod33 from '../assets/bajramsko_selo_2026/PREPOROD33.jpg'
import preporod34 from '../assets/bajramsko_selo_2026/PREPOROD34.jpg'
import preporod35 from '../assets/bajramsko_selo_2026/PREPOROD35.jpg'
import preporod36 from '../assets/bajramsko_selo_2026/PREPOROD36.jpg'
import preporod37 from '../assets/bajramsko_selo_2026/PREPOROD37.jpg'
import preporod38 from '../assets/bajramsko_selo_2026/PREPOROD38.jpg'
import preporod39 from '../assets/bajramsko_selo_2026/PREPOROD39.jpg'
import preporod40 from '../assets/bajramsko_selo_2026/PREPOROD40.jpg'
import preporod41 from '../assets/bajramsko_selo_2026/PREPOROD41.jpg'
import preporod42 from '../assets/bajramsko_selo_2026/PREPOROD42.jpg'


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

//Belma
import belma from '../assets/belma_cover.jpg'
import belma0 from '../assets/belma_matura_24/belma0.jpg'
import belma1 from '../assets/belma_matura_24/belma1.jpg'
import belma2 from '../assets/belma_matura_24/belma2.jpg'
import belma3 from '../assets/belma_matura_24/belma3.jpg'
import belma4 from '../assets/belma_matura_24/belma4.jpg'
import belma5 from '../assets/belma_matura_24/belma5.jpg'
import belma6 from '../assets/belma_matura_24/belma6.jpg'
import belma7 from '../assets/belma_matura_24/belma7.jpg'
import belma8 from '../assets/belma_matura_24/belma8.jpg'
import belma9 from '../assets/belma_matura_24/belma9.jpg'
import belma10 from '../assets/belma_matura_24/belma10.jpg'
import belma11 from '../assets/belma_matura_24/belma11.jpg'
import belma12 from '../assets/belma_matura_24/belma12.jpg'
import belma13 from '../assets/belma_matura_24/belma13.jpg'
import belma14 from '../assets/belma_matura_24/belma14.jpg'
import belma15 from '../assets/belma_matura_24/belma15.jpg'
import belma16 from '../assets/belma_matura_24/belma16.jpg'
import belma17 from '../assets/belma_matura_24/belma17.jpg'
import belma18 from '../assets/belma_matura_24/belma18.jpg'

//Harisa
import harisa from '../assets/harisa_cover.jpg'
import harisa0 from '../assets/harisa_matura_24/harisa0.jpg'
import harisa1 from '../assets/harisa_matura_24/harisa1.jpg'
import harisa2 from '../assets/harisa_matura_24/harisa2.jpg'
import harisa3 from '../assets/harisa_matura_24/harisa3.jpg'
import harisa4 from '../assets/harisa_matura_24/harisa4.jpg'
import harisa5 from '../assets/harisa_matura_24/harisa5.jpg'
import harisa6 from '../assets/harisa_matura_24/harisa6.jpg'
import harisa7 from '../assets/harisa_matura_24/harisa7.jpg'
import harisa8 from '../assets/harisa_matura_24/harisa8.jpg'
import harisa9 from '../assets/harisa_matura_24/harisa9.jpg'
import harisa10 from '../assets/harisa_matura_24/harisa10.jpg'
import harisa11 from '../assets/harisa_matura_24/harisa11.jpg'
import harisa12 from '../assets/harisa_matura_24/harisa12.jpg'
import harisa13 from '../assets/harisa_matura_24/harisa13.jpg'
import harisa14 from '../assets/harisa_matura_24/harisa14.jpg'

//Suana
import suana from '../assets/suana_cover.jpg'
import suana0 from '../assets/suana_matura24/suana0.jpg'
import suana1 from '../assets/suana_matura24/suana1.jpg'
import suana2 from '../assets/suana_matura24/suana2.jpg'
import suana3 from '../assets/suana_matura24/suana3.jpg'
import suana4 from '../assets/suana_matura24/suana4.jpg'
import suana5 from '../assets/suana_matura24/suana5.jpg'
import suana6 from '../assets/suana_matura24/suana6.jpg'
import suana7 from '../assets/suana_matura24/suana7.jpg'
import suana8 from '../assets/suana_matura24/suana8.jpg'
import suana9 from '../assets/suana_matura24/suana9.jpg'
import suana10 from '../assets/suana_matura24/suana10.jpg'

//Frano
import frano from '../assets/frano_cover.jpg'
import frano0 from '../assets/frano_romari/frano0.jpg'
import frano1 from '../assets/frano_romari/frano1.jpg'
import frano2 from '../assets/frano_romari/frano2.jpg'
import frano3 from '../assets/frano_romari/frano3.jpg'
import frano4 from '../assets/frano_romari/frano4.jpg'
import frano5 from '../assets/frano_romari/frano5.jpg'
import frano6 from '../assets/frano_romari/frano6.jpg'
import frano7 from '../assets/frano_romari/frano7.jpg'
import frano8 from '../assets/frano_romari/frano8.jpg'
import frano9 from '../assets/frano_romari/frano9.jpg'

//Amila
import amilap from '../assets/amilap_cover.jpg'
import amila0 from '../assets/amilap/amila0.jpg'
import amila1 from '../assets/amilap/amila1.jpg'
import amila2 from '../assets/amilap/amila2.jpg'
import amila3 from '../assets/amilap/amila3.jpg'
import amila4 from '../assets/amilap/amila4.jpg'
import amila5 from '../assets/amilap/amila5.jpg'
import amila6 from '../assets/amilap/amila6.jpg'

//Freiburg
import frei0 from '../assets/freiburg/freiburg0.jpg'
import frei1 from '../assets/freiburg/freiburg1.jpg'
import frei2 from '../assets/freiburg/freiburg2.jpg'
import frei3 from '../assets/freiburg/freiburg3.jpg'
import frei4 from '../assets/freiburg/freiburg4.jpg'
import frei5 from '../assets/freiburg/freiburg5.jpg'
import frei6 from '../assets/freiburg/freiburg6.jpg'
import frei7 from '../assets/freiburg/freiburg7.jpg'
import frei8 from '../assets/freiburg/freiburg8.jpg'

//Breisach
import brei0 from '../assets/brajzah/brajzah0.jpg'
import brei1 from '../assets/brajzah/brajzah1.jpg'
import brei2 from '../assets/brajzah/brajzah2.jpg'
import brei3 from '../assets/brajzah/brajzah3.jpg'
import brei4 from '../assets/brajzah/brajzah4.jpg'
import brei5 from '../assets/brajzah/brajzah5.jpg'
import brei6 from '../assets/brajzah/brajzah6.jpg'
import brei7 from '../assets/brajzah/brajzah7.jpg'


//Strasburg
import stras0 from '../assets/strasburg/strasburg0.jpg'
import stras1 from '../assets/strasburg/strasburg1.jpg'
import stras2 from '../assets/strasburg/strasburg2.jpg'
import stras3 from '../assets/strasburg/strasburg3.jpg'
import stras4 from '../assets/strasburg/strasburg4.jpg'
import stras5 from '../assets/strasburg/strasburg5.jpg'
import stras6 from '../assets/strasburg/strasburg6.jpg'
import stras7 from '../assets/strasburg/strasburg7.jpg'
import stras8 from '../assets/strasburg/strasburg8.jpg'
import stras9 from '../assets/strasburg/strasburg9.jpg'
import stras10 from '../assets/strasburg/strasburg10.jpg'
import stras11 from '../assets/strasburg/strasburg11.jpg'
import stras12 from '../assets/strasburg/strasburg12.jpg'
import stras13 from '../assets/strasburg/strasburg13.jpg'
import stras14 from '../assets/strasburg/strasburg14.jpg'
import stras15 from '../assets/strasburg/strasburg15.jpg'
import stras16 from '../assets/strasburg/strasburg16.jpg'
import stras17 from '../assets/strasburg/strasburg17.jpg'
import stras18 from '../assets/strasburg/strasburg18.jpg'
import stras19 from '../assets/strasburg/strasburg19.jpg'
import stras20 from '../assets/strasburg/strasburg20.jpg'
import stras21 from '../assets/strasburg/strasburg21.jpg'
import stras22 from '../assets/strasburg/strasburg22.jpg'

//Haris-Armina
import harisar0 from '../assets/haris_armina/haris0.jpg'
import harisar1 from '../assets/haris_armina/haris1.jpg'
import harisar2 from '../assets/haris_armina/haris2.jpg'
import harisar3 from '../assets/haris_armina/haris3.jpg'
import harisar4 from '../assets/haris_armina/haris4.jpg'
import harisar5 from '../assets/haris_armina/haris5.jpg'
import harisar6 from '../assets/haris_armina/haris6.jpg'

//Faris-Adna
import farisadna0 from '../assets/faris_adna/fa0.jpg'
import farisadna1 from '../assets/faris_adna/fa1.jpg'
import farisadna2 from '../assets/faris_adna/fa2.jpg'
import farisadna3 from '../assets/faris_adna/fa3.jpg'
import farisadna4 from '../assets/faris_adna/fa4.jpg'
import farisadna5 from '../assets/faris_adna/fa5.jpg'
import farisadna6 from '../assets/faris_adna/fa6.jpg'
import farisadna7 from '../assets/faris_adna/fa7.jpg'
import farisadna8 from '../assets/faris_adna/fa8.jpg'
import farisadna9 from '../assets/faris_adna/fa9.jpg'

//Mevle-Hana
import mevlehana0 from '../assets/mevle_hana/mevle0.jpg'
import mevlehana1 from '../assets/mevle_hana/mevle1.jpg'
import mevlehana2 from '../assets/mevle_hana/mevle2.jpg'
import mevlehana3 from '../assets/mevle_hana/mevle3.jpg'
import mevlehana4 from '../assets/mevle_hana/mevle4.jpg'

//Tarik-Sajra
import tariksajra0 from '../assets/tarik_sajra/tarik0.jpg'
import tariksajra1 from '../assets/tarik_sajra/tarik1.jpg'
import tariksajra2 from '../assets/tarik_sajra/tarik2.jpg'
import tariksajra3 from '../assets/tarik_sajra/tarik3.jpg'
import tariksajra4 from '../assets/tarik_sajra/tarik4.jpg'
import tariksajra5 from '../assets/tarik_sajra/tarik5.jpg'
import tariksajra6 from '../assets/tarik_sajra/tarik6.jpg'
import tariksajra7 from '../assets/tarik_sajra/tarik7.jpg'
import tariksajra8 from '../assets/tarik_sajra/tarik8.jpg'
import tariksajra9 from '../assets/tarik_sajra/tarik9.jpg'

//etnoselo
import etno0 from '../assets/etno/etno0.jpg'
import etno1 from '../assets/etno/etno1.jpg'
import etno2 from '../assets/etno/etno2.jpg'
import etnoselo from "../assets/etno_cover.jpg";

//dovzenica26
import dovzenica from "../assets/dov_zenica_cover.JPG";
import dov0 from "../assets/dov_zenica26/fb-01.jpg";
import dov1 from "../assets/dov_zenica26/fb-02.jpg";
import dov2 from "../assets/dov_zenica26/fb-03.jpg";
import dov3 from "../assets/dov_zenica26/fb-04.jpg";
import dov4 from "../assets/dov_zenica26/fb-05.jpg";
import dov5 from "../assets/dov_zenica26/fb-06.jpg";
import dov6 from "../assets/dov_zenica26/fb-07.jpg";
import dov7 from "../assets/dov_zenica26/fb-08.jpg";
import dov8 from "../assets/dov_zenica26/fb-09.jpg";
import dov9 from "../assets/dov_zenica26/fb-10.jpg";
import dov10 from "../assets/dov_zenica26/fb-11.jpg";
import dov11 from "../assets/dov_zenica26/fb-12.jpg";
import dov12 from "../assets/dov_zenica26/fb-13.jpg";
import dov13 from "../assets/dov_zenica26/fb-14.jpg";
import dov14 from "../assets/dov_zenica26/fb-15.jpg";
import dov15 from "../assets/dov_zenica26/fb-16.jpg";
import dov16 from "../assets/dov_zenica26/fb-17.jpg";
import dov17 from "../assets/dov_zenica26/fb-18.jpg";
import dov18 from "../assets/dov_zenica26/fb-19.jpg";
import dov19 from "../assets/dov_zenica26/fb-20.jpg";
import dov20 from "../assets/dov_zenica26/fb-21.jpg";
import dov21 from "../assets/dov_zenica26/fb-22.jpg";
import dov22 from "../assets/dov_zenica26/fb-23.jpg";
import dov23 from "../assets/dov_zenica26/fb-24.jpg";
import dov24 from "../assets/dov_zenica26/fb-25.jpg";
import dov25 from "../assets/dov_zenica26/fb-26.jpg";
import dov26 from "../assets/dov_zenica26/fb-27.jpg";
import dov27 from "../assets/dov_zenica26/fb-28.jpg";
import dov28 from "../assets/dov_zenica26/fb-29.jpg";
import dov29 from "../assets/dov_zenica26/fb-30.jpg";
import dov30 from "../assets/dov_zenica26/fb-31.jpg";
import dov31 from "../assets/dov_zenica26/fb-32.jpg";
import dov32 from "../assets/dov_zenica26/fb-33.jpg";
import dov33 from "../assets/dov_zenica26/fb-34.jpg";
import dov34 from "../assets/dov_zenica26/fb-35.jpg";
import dov35 from "../assets/dov_zenica26/fb-36.jpg";
import dov36 from "../assets/dov_zenica26/fb-37.jpg";
import dov37 from "../assets/dov_zenica26/fb-38.jpg";
import dov38 from "../assets/dov_zenica26/fb-39.jpg";
import dov39 from "../assets/dov_zenica26/fb-40.jpg";
import dov40 from "../assets/dov_zenica26/fb-41.jpg";
import dov41 from "../assets/dov_zenica26/fb-42.jpg";
import dov42 from "../assets/dov_zenica26/fb-43.jpg";
import dov43 from "../assets/dov_zenica26/fb1-1.jpg";
import dov44 from "../assets/dov_zenica26/fb1-2.jpg";
import dov45 from "../assets/dov_zenica26/fb1-3.jpg";
import dov46 from "../assets/dov_zenica26/fb1-4.jpg";
import dov47 from "../assets/dov_zenica26/fb1-5.jpg";
import dov48 from "../assets/dov_zenica26/fb1-6.jpg";
import dov49 from "../assets/dov_zenica26/fb1-7.jpg";

//amarhodzic
import ah0 from "../assets/amarhodzicmatura26/amarh0.jpg";
import ah1 from "../assets/amarhodzicmatura26/amarh1.jpg";
import ah2 from "../assets/amarhodzicmatura26/amarh2.jpg";
import ah3 from "../assets/amarhodzicmatura26/amarh3.jpg";
import ah4 from "../assets/amarhodzicmatura26/amarh4.jpg";
import ah5 from "../assets/amarhodzicmatura26/amarh5.jpg";
import ah6 from "../assets/amarhodzicmatura26/amarh6.jpg";
import ah7 from "../assets/amarhodzicmatura26/amarh7.jpg";

//mststravnik 2026
import msts0 from "../assets/maturamsts2026/msts26_0.jpg";
import msts1 from "../assets/maturamsts2026/msts26_1.jpg";
import msts2 from "../assets/maturamsts2026/msts26_2.jpg";
import msts3 from "../assets/maturamsts2026/msts26_3.jpg";
import msts4 from "../assets/maturamsts2026/msts26_4.jpg";
import msts5 from "../assets/maturamsts2026/msts26_5.jpg";
import msts6 from "../assets/maturamsts2026/msts26_6.jpg";
import msts7 from "../assets/maturamsts2026/msts26_7.jpg";
import msts8 from "../assets/maturamsts2026/msts26_8.jpg";
import msts9 from "../assets/maturamsts2026/msts26_9.jpg";
import msts10 from "../assets/maturamsts2026/msts26_10.jpg";
import msts11 from "../assets/maturamsts2026/msts26_11.jpg";
import msts12 from "../assets/maturamsts2026/msts26_12.jpg";
import msts13 from "../assets/maturamsts2026/msts26_13.jpg";
import msts14 from "../assets/maturamsts2026/msts26_14.jpg";
import msts15 from "../assets/maturamsts2026/msts26_15.jpg";
import msts16 from "../assets/maturamsts2026/msts26_16.jpg";
import msts17 from "../assets/maturamsts2026/msts26_17.jpg";
import msts18 from "../assets/maturamsts2026/msts26_18.jpg";
import msts19 from "../assets/maturamsts2026/msts26_19.jpg";
import msts20 from "../assets/maturamsts2026/msts26_20.jpg";
import msts21 from "../assets/maturamsts2026/msts26_21.jpg";

//edna tulum matura 2026
import et0 from "../assets/ednatulum/ednat0.jpg";
import et1 from "../assets/ednatulum/ednat1.jpg";
import et2 from "../assets/ednatulum/ednat2.jpg";
import et3 from "../assets/ednatulum/ednat3.jpg";

//edin sulja 2026
import es0 from "../assets/edinahmedmss26/sulja0.jpg";
import es1 from "../assets/edinahmedmss26/sulja1.jpg";
import es2 from "../assets/edinahmedmss26/sulja2.jpg";
import es3 from "../assets/edinahmedmss26/sulja3.jpg";
import es4 from "../assets/edinahmedmss26/sulja4.jpg";


//amila dajic 2026
import ad0 from "../assets/amiladajicmss26/amilad0.jpg";
import ad1 from "../assets/amiladajicmss26/amilad1.jpg";
import ad2 from "../assets/amiladajicmss26/amilad2.jpg";
import ad3 from "../assets/amiladajicmss26/amilad3.jpg";
import ad4 from "../assets/amiladajicmss26/amilad4.jpg";
import ad5 from "../assets/amiladajicmss26/amilad5.jpg";
import ad6 from "../assets/amiladajicmss26/amilad6.jpg";
import ad7 from "../assets/amiladajicmss26/amilad7.jpg";
import ad8 from "../assets/amiladajicmss26/amilad8.jpg";
import ad9 from "../assets/amiladajicmss26/amilad9.jpg";
import ad10 from "../assets/amiladajicmss26/amilad10.jpg";
import ad11 from "../assets/amiladajicmss26/amilad11.jpg";

//amila pezer 2026 matura
import ap0 from "../assets/amilapezermatura26/amilap0.jpg";
import ap1 from "../assets/amilapezermatura26/amilap1.jpg";
import ap2 from "../assets/amilapezermatura26/amilap2.jpg";
import ap3 from "../assets/amilapezermatura26/amilap3.jpg";
import ap4 from "../assets/amilapezermatura26/amilap4.jpg";
import ap5 from "../assets/amilapezermatura26/amilap5.jpg";
import ap6 from "../assets/amilapezermatura26/amilap6.jpg";
import ap7 from "../assets/amilapezermatura26/amilap7.jpg";
import ap8 from "../assets/amilapezermatura26/amilap8.jpg";
import ap9 from "../assets/amilapezermatura26/amilap9.jpg";
import ap10 from "../assets/amilapezermatura26/amilap10.jpg";
import ap11 from "../assets/amilapezermatura26/amilap11.jpg";

//ahmed varupa matura 2026
import av0 from "../assets/edinahmedmss26/ahmedv0.jpg";
import av1 from "../assets/edinahmedmss26/ahmedv1.jpg";
import av2 from "../assets/edinahmedmss26/ahmedv2.jpg";
import av3 from "../assets/edinahmedmss26/ahmedv3.jpg";
import ae1 from "../assets/edinahmedmss26/as0.jpg";
import ae2 from "../assets/edinahmedmss26/as0.jpg";
import ae3 from "../assets/edinahmedmss26/as0.jpg";


//mss travnik 2026
import msst0 from "../assets/maturamss26/msst260.jpg";
import msst1 from "../assets/maturamss26/msst261.jpg";
import msst2 from "../assets/maturamss26/msst262.jpg";
import msst3 from "../assets/maturamss26/msst263.jpg";
import msst4 from "../assets/maturamss26/msst264.jpg";

//tbs bzk 2026
import tbs0 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-01.jpg";
import tbs1 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-02.jpg";
import tbs2 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-03.jpg";
import tbs3 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-04.jpg";
import tbs4 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-05.jpg";
import tbs5 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-06.jpg";
import tbs6 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-07.jpg";
import tbs7 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-08.jpg";
import tbs8 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-09.jpg";
import tbs9 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-10.jpg";
import tbs10 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-11.jpg";
import tbs11 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-12.jpg";
import tbs12 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-13.jpg";
import tbs13 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-14.jpg";
import tbs14 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-15.jpg";
import tbs15 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-16.jpg";
import tbs16 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-17.jpg";
import tbs17 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-18.jpg";
import tbs18 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-19.jpg";
import tbs19 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-20.jpg";
import tbs20 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-21.jpg";
import tbs21 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-22.jpg";
import tbs22 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-23.jpg";
import tbs23 from "../assets/bajramskosijelo-kurban2026/bajramskosijelo-kurban2026-24.jpg";
//balta 2026
import balta0 from "../assets/ednan baltic26/balta0.jpg";
import balta1 from "../assets/ednan baltic26/balta1.jpg";
import balta2 from "../assets/ednan baltic26/balta2.jpg";
import balta3 from "../assets/ednan baltic26/balta3.jpg";


import amarh from "../assets/amarhodzic_cover.jpg";
import msts26 from "../assets/msts26_cover.jpg";
import ednat from "../assets/ednat_cover.jpg";
import sulja from "../assets/sulja_cover.jpg";
import amiladajic from "../assets/amiladajic_cover.jpg";
import ahmedv from "../assets/ahmed_cover.jpg";
import mss26 from "../assets/mss_cover.jpg";
import larisbzk from "../assets/laris_cover.jpg";
import ednanbalta from "../assets/balta_cover.jpg";



const EventDetail = () => {
    const { eventId } = useParams();

    // Mock event data - in a real app, this would come from an API
    const eventData = {

        'ednan-baltic-sesija-2026': {
            title: 'Ednan Baltić - sesija slikanja',
            description: '',
            date: '31.05.2026.',
            location: 'Vitez, BiH',
            coverImage: ednanbalta,
            images: [
                { id: '1', src: balta0, alt: 'Wedding ceremony' },
                { id: '2', src: balta1, alt: 'Bride and groom portrait' },
                { id: '3', src: balta2, alt: 'Bride and groom portrait' },
                { id: '4', src: balta3, alt: 'Wedding ceremony' },
            ],
        },
        'tradicionalno_bajramsko_sijelo_nek_mirisu_avlije_2026': {
            title: 'Tradicionlano Bajramsko sijelo "Nek mirišu avlije"',
            description: '',
            date: '29.05.2026.',
            location: 'Vitez, BiH',
            coverImage: larisbzk,
            imageCount: 24,
            images: [
                { id: '1', src: tbs0, alt: 'Wedding ceremony' },
                { id: '2', src: tbs1, alt: 'Bride and groom portrait' },
                { id: '3', src: tbs2, alt: 'Bride and groom portrait' },
                { id: '4', src: tbs3, alt: 'Wedding ceremony' },
                { id: '5', src: tbs4, alt: 'Bride and groom portrait' },
                { id: '6', src: tbs5, alt: 'Bride and groom portrait' },
                { id: '7', src: tbs6, alt: 'Wedding ceremony' },
                { id: '8', src: tbs7, alt: 'Bride and groom portrait' },
                { id: '9', src: tbs8, alt: 'Bride and groom portrait' },
                { id: '10', src: tbs9, alt: 'Wedding ceremony' },
                { id: '11', src: tbs10, alt: 'Bride and groom portrait' },
                { id: '12', src: tbs11, alt: 'Bride and groom portrait' },
                { id: '13', src: tbs12, alt: 'Wedding ceremony' },
                { id: '14', src: tbs13, alt: 'Bride and groom portrait' },
                { id: '15', src: tbs14, alt: 'Bride and groom portrait' },
                { id: '16', src: tbs15, alt: 'Wedding ceremony' },
                { id: '17', src: tbs16, alt: 'Bride and groom portrait' },
                { id: '18', src: tbs17, alt: 'Bride and groom portrait' },
                { id: '19', src: tbs18, alt: 'Wedding ceremony' },
                { id: '20', src: tbs19, alt: 'Bride and groom portrait' },
                { id: '21', src: tbs20, alt: 'Bride and groom portrait' },
                { id: '22', src: tbs21, alt: 'Wedding ceremony' },
                { id: '23', src: tbs22, alt: 'Bride and groom portrait' },
                { id: '24', src: tbs23, alt: 'Wedding ceremony' },
            ],
        },
        'matura-msst2026': {
            title: 'Matura 2026. Mješovite srednje škole Travnik',
            description: '',
            date: '23.05.2026.',
            location: 'Travnik, BiH',
            coverImage: mss26,
            images: [
                { id: '1', src: msst0, alt: 'Wedding ceremony' },
                { id: '2', src: msst1, alt: 'Bride and groom portrait' },
                { id: '3', src: msst2, alt: 'Bride and groom portrait' },
                { id: '4', src: msst3, alt: 'Wedding ceremony' },
                { id: '5', src: msst4, alt: 'Bride and groom portrait' },
            ],
        },
        'ahmed-varupa-matura-msst2026': {
            title: 'Ahmed Varupa Matura 2026',
            description: '',
            date: '23.05.2026.',
            location: 'Travnik, BiH',
            coverImage: ahmedv,
            images: [
                { id: '1', src: av0, alt: 'Wedding ceremony' },
                { id: '2', src: av1, alt: 'Bride and groom portrait' },
                { id: '3', src: av2, alt: 'Bride and groom portrait' },
                { id: '4', src: av3, alt: 'Wedding ceremony' },
                { id: '5', src: ae1, alt: 'Bride and groom portrait' },
                { id: '6', src: ae2, alt: 'Bride and groom portrait' },
                { id: '7', src: ae3, alt: 'Wedding ceremony' },


            ],
        },
        'amila-pezer-matura-msst2026': {
            title: 'Amila Pezer Matura 2026',
            description: '',
            date: '23.05.2026.',
            location: 'Etno selo Čardaci Vitez, Travnik, BiH',
            coverImage: amilap,
            images: [
                { id: '1', src: ap0, alt: 'Wedding ceremony' },
                { id: '2', src: ap1, alt: 'Bride and groom portrait' },
                { id: '3', src: ap2, alt: 'Bride and groom portrait' },
                { id: '4', src: ap3, alt: 'Wedding ceremony' },
                { id: '5', src: ap4, alt: 'Bride and groom portrait' },
                { id: '6', src: ap5, alt: 'Bride and groom portrait' },
                { id: '7', src: ap6, alt: 'Wedding ceremony' },
                { id: '8', src: ap7, alt: 'Bride and groom portrait' },
                { id: '9', src: ap8, alt: 'Bride and groom portrait' },
                { id: '10', src: ap9, alt: 'Wedding ceremony' },
                { id: '11', src: ap10, alt: 'Bride and groom portrait' },
                { id: '12', src: ap11, alt: 'Bride and groom portrait' },

            ],
        },
        'amila-dajic-matura-msst2026': {
            title: 'Amila Dajić Matura 2026',
            description: '',
            date: '29.04.2026.',
            location: 'Travnik, BiH',
            coverImage: amiladajic,
            images: [
                { id: '1', src: ad0, alt: 'Wedding ceremony' },
                { id: '2', src: ad1, alt: 'Bride and groom portrait' },
                { id: '3', src: ad2, alt: 'Bride and groom portrait' },
                { id: '4', src: ad3, alt: 'Wedding ceremony' },
                { id: '5', src: ad5, alt: 'Bride and groom portrait' },
                { id: '6', src: ad6, alt: 'Bride and groom portrait' },
                { id: '7', src: ad7, alt: 'Wedding ceremony' },
                { id: '8', src: ad8, alt: 'Bride and groom portrait' },
                { id: '9', src: ad9, alt: 'Bride and groom portrait' },
                { id: '10', src: ad10, alt: 'Wedding ceremony' },
                { id: '11', src: ad11, alt: 'Bride and groom portrait' },
                { id: '12', src: ad4, alt: 'Bride and groom portrait' },

            ],
        },
        'edin-suljevic-matura-msst2026': {
            title: 'Edin Suljević Matura 2026',
            description: '',
            date: '23.05.2026.',
            location: 'Etno selo Čardaci Vitez, Travnik, BiH',
            coverImage: sulja,
            images: [
                { id: '1', src: es0, alt: 'Wedding ceremony' },
                { id: '2', src: es1, alt: 'Bride and groom portrait' },
                { id: '3', src: es2, alt: 'Bride and groom portrait' },
                { id: '4', src: es3, alt: 'Wedding ceremony' },
                { id: '5', src: ae1, alt: 'Bride and groom portrait' },
                { id: '6', src: ae2, alt: 'Bride and groom portrait' },
                { id: '7', src: ae3, alt: 'Wedding ceremony' },
                { id: '8', src: es4, alt: 'Wedding ceremony' },


            ],
        },
        'edna-tulum-matura-mseus2026': {
            title: 'Edna Tulum Matura 2026',
            description: '',
            date: '22.05.2026.',
            location: 'Travnik, BiH',
            coverImage: ednat,
            images: [
                { id: '1', src: et0, alt: 'Wedding ceremony' },
                { id: '2', src: et1, alt: 'Bride and groom portrait' },
                { id: '3', src: et2, alt: 'Bride and groom portrait' },
                { id: '4', src: et3, alt: 'Wedding ceremony' },
            ],
        },
        'matura-msts2026': {
            title: 'Matura 2026. Mješovite srednje tehničke škole Travnik',
            description: '',
            date: '16.05.2026.',
            location: 'Travnik, BiH',
            imageCount: 22,
            images: [
                { id: '1', src: msts0, alt: 'Wedding ceremony' },
                { id: '2', src: msts1, alt: 'Bride and groom portrait' },
                { id: '3', src: msts2, alt: 'Bride and groom portrait' },
                { id: '4', src: msts3, alt: 'Wedding ceremony' },
                { id: '5', src: msts4, alt: 'Bride and groom portrait' },
                { id: '6', src: msts5, alt: 'Bride and groom portrait' },
                { id: '7', src: msts6, alt: 'Wedding ceremony' },
                { id: '8', src: msts7, alt: 'Bride and groom portrait' },
                { id: '9', src: msts8, alt: 'Bride and groom portrait' },
                { id: '10', src: msts9, alt: 'Wedding ceremony' },
                { id: '11', src: msts10, alt: 'Bride and groom portrait' },
                { id: '12', src: msts11, alt: 'Bride and groom portrait' },
                { id: '13', src: msts12, alt: 'Wedding ceremony' },
                { id: '14', src: msts13, alt: 'Bride and groom portrait' },
                { id: '15', src: msts14, alt: 'Bride and groom portrait' },
                { id: '16', src: msts15, alt: 'Wedding ceremony' },
                { id: '17', src: msts16, alt: 'Bride and groom portrait' },
                { id: '18', src: msts17, alt: 'Bride and groom portrait' },
                { id: '19', src: msts18, alt: 'Wedding ceremony' },
                { id: '20', src: msts19, alt: 'Bride and groom portrait' },
                { id: '21', src: msts20, alt: 'Bride and groom portrait' },
                { id: '22', src: msts21, alt: 'Wedding ceremony' },

            ],
        },
        'amar-hodzic-matura-msts2026': {
            title: 'Amar Hodžić Matura 2026',
            description: '',
            date: '16.05.2026.',
            location: 'Travnik, BiH',
            coverImage: amarh,
            images: [
                { id: '1', src: ah0, alt: 'Wedding ceremony' },
                { id: '2', src: ah1, alt: 'Bride and groom portrait' },
                { id: '3', src: ah2, alt: 'Bride and groom portrait' },
                { id: '4', src: ah3, alt: 'Wedding ceremony' },
                { id: '5', src: ah4, alt: 'Bride and groom portrait' },
                { id: '6', src: ah5, alt: 'Bride and groom portrait' },
                { id: '7', src: ah6, alt: 'Wedding ceremony' },
                { id: '8', src: ah7, alt: 'Bride and groom portrait' },
            ],
        },

        'dan-otvorenih-vrata-univerziteta-u-zenici-2026': {
            title: 'Dan otvorenih vrata Univerziteta u Zenici 2026',
            description: 'Dana 29.04.2026. godine imao sam čast da volontiram kao fotograf ispred Politehničkom fakulteta u Zenici ' +
                'tokom ovogodišnje manifestacije ,,Dan otvorenih vrata Univerziteta u Zenici". Zadovoljstvo mi je bilo razgovarati s budućim studentima i kolegama, te kroz boje prenijeti duh kreativnosti koji njegujemo na našem fakultetu.',
            date: '29.04.2026.',
            location: 'Kampus Univerziteta u Zenici, BiH',
            coverImage: dovzenica,
            images: [
                { id: '1', src: dov0, alt: 'Wedding ceremony' },
                { id: '2', src: dov1, alt: 'Bride and groom portrait' },
                { id: '3', src: dov2, alt: 'Bride and groom portrait' },
                { id: '4', src: dov3, alt: 'Wedding ceremony' },
                { id: '5', src: dov4, alt: 'Bride and groom portrait' },
                { id: '6', src: dov5, alt: 'Bride and groom portrait' },
                { id: '7', src: dov6, alt: 'Wedding ceremony' },
                { id: '8', src: dov7, alt: 'Bride and groom portrait' },
                { id: '9', src: dov8, alt: 'Bride and groom portrait' },
                { id: '10', src: dov9, alt: 'Wedding ceremony' },
                { id: '11', src: dov10, alt: 'Bride and groom portrait' },
                { id: '12', src: dov11, alt: 'Bride and groom portrait' },
                { id: '13', src: dov12, alt: 'Wedding ceremony' },
                { id: '14', src: dov13, alt: 'Bride and groom portrait' },
                { id: '15', src: dov14, alt: 'Bride and groom portrait' },
                { id: '16', src: dov15, alt: 'Wedding ceremony' },
                { id: '17', src: dov16, alt: 'Bride and groom portrait' },
                { id: '18', src: dov17, alt: 'Bride and groom portrait' },
                { id: '19', src: dov18, alt: 'Wedding ceremony' },
                { id: '20', src: dov19, alt: 'Bride and groom portrait' },
                { id: '21', src: dov20, alt: 'Bride and groom portrait' },
                { id: '22', src: dov21, alt: 'Wedding ceremony' },
                { id: '23', src: dov22, alt: 'Bride and groom portrait' },
                { id: '24', src: dov23, alt: 'Bride and groom portrait' },
                { id: '25', src: dov24, alt: 'Wedding ceremony' },
                { id: '26', src: dov25, alt: 'Bride and groom portrait' },
                { id: '27', src: dov26, alt: 'Bride and groom portrait' },
                { id: '28', src: dov27, alt: 'Wedding ceremony' },
                { id: '29', src: dov28, alt: 'Bride and groom portrait' },
                { id: '30', src: dov29, alt: 'Bride and groom portrait' },
                { id: '31', src: dov30, alt: 'Wedding ceremony' },
                { id: '32', src: dov31, alt: 'Bride and groom portrait' },
                { id: '33', src: dov32, alt: 'Bride and groom portrait' },
                { id: '34', src: dov33, alt: 'Wedding ceremony' },
                { id: '35', src: dov34, alt: 'Bride and groom portrait' },
                { id: '36', src: dov35, alt: 'Bride and groom portrait' },
                { id: '37', src: dov36, alt: 'Wedding ceremony' },
                { id: '38', src: dov37, alt: 'Bride and groom portrait' },
                { id: '39', src: dov38, alt: 'Bride and groom portrait' },
                { id: '40', src: dov39, alt: 'Wedding ceremony' },
                { id: '41', src: dov40, alt: 'Bride and groom portrait' },
                { id: '42', src: dov41, alt: 'Bride and groom portrait' },
                { id: '43', src: dov42, alt: 'Wedding ceremony' },
                { id: '44', src: dov43, alt: 'Bride and groom portrait' },
                { id: '45', src: dov44, alt: 'Bride and groom portrait' },
                { id: '46', src: dov45, alt: 'Wedding ceremony' },
                { id: '47', src: dov46, alt: 'Bride and groom portrait' },
                { id: '48', src: dov47, alt: 'Bride and groom portrait' },
                { id: '49', src: dov48, alt: 'Wedding ceremony' },
                { id: '50', src: dov49, alt: 'Bride and groom portrait' },
            ],
        },
        'etno-selo-cardaci2026': {
            title: 'Etno selo Čardaci',
            description: 'Probavanje novog objektiva Canon zoom lens 24-70mm f2.8 II USP u Etnom selu Čardaci u Vitezu.',
            date: '26.04.2026.',
            location: 'Dvorana Behar Vitez, BiH',
            coverImage: etnoselo,
            images: [
                { id: '1', src: etno0, alt: 'Wedding ceremony' },
                { id: '2', src: etno1, alt: 'Bride and groom portrait' },
                { id: '3', src: etno2, alt: 'Bride and groom portrait' },

            ],
        },
        'bajramsko_sijelo_nek_mirisu_avlije_2026': {
            title: 'Bajramsko sijelo "Nek mirišu avlije"',
            description: 'Bajramsko sijelo "Nek mirišu avlije" je manifestacija sa tradicijom dugom više od 30 godina. Kontinuitet obilježavanja Bajrama Bošnjačka zajednica kulture općinsko društvo Vitez nastavila je upravo sa ovim kulturno-zabavnim događajem koji je održan 3.dan Ramazanskog Bajrama, u sali Vatrogasnog doma u Starom Vitezu.\n' +
                'U programu su nastupile sve sekcije koje djeluju u okviru udruženja, a program su obogatili i gosti iz UG "Ajvatovački biseri" iz Prusca.',
            date: '22.03.2026.',
            location: 'Dvorana Behar Vitez, BiH',
            coverImage: bajramskosijelo,
            images: [
                { id: '1', src: preporod0, alt: 'Wedding ceremony' },
                { id: '2', src: preporod1, alt: 'Bride and groom portrait' },
                { id: '4', src: preporod2, alt: 'Wedding details' },
                { id: '5', src: preporod3, alt: 'Wedding party' },
                { id: '6', src: preporod4, alt: 'First dance' },
                { id: '7', src: preporod6, alt: 'First dance' },
                { id: '8', src: preporod8, alt: 'First dance' },
                { id: '9', src: preporod10, alt: 'First dance' },
                { id: '11', src: preporod11, alt: 'First dance' },
                { id: '12', src: preporod12, alt: 'First dance' },
                { id: '14', src: preporod15, alt: 'First dance' },
                { id: '15', src: preporod16, alt: 'First dance' },
                { id: '16', src: preporod17, alt: 'First dance' },
                { id: '17', src: preporod18, alt: 'First dance' },
                { id: '18', src: preporod20, alt: 'First dance' },
                { id: '19', src: preporod22, alt: 'First dance' },
                { id: '20', src: preporod23, alt: 'First dance' },
                { id: '21', src: preporod24, alt: 'First dance' },
                { id: '22', src: preporod27, alt: 'First dance' },
                { id: '23', src: preporod28, alt: 'First dance' },
                { id: '24', src: preporod29, alt: 'First dance' },
                { id: '25', src: preporod30, alt: 'First dance' },
                { id: '26', src: preporod31, alt: 'First dance' },
                { id: '27', src: preporod32, alt: 'First dance' },
                { id: '28', src: preporod33, alt: 'First dance' },
                { id: '29', src: preporod34, alt: 'First dance' },
                { id: '30', src: preporod35, alt: 'First dance' },
                { id: '31', src: preporod36, alt: 'First dance' },
                { id: '32', src: preporod37, alt: 'First dance' },
                { id: '33', src: preporod38, alt: 'First dance' },
                { id: '34', src: preporod39, alt: 'First dance' },
                { id: '35', src: preporod40, alt: 'First dance' },
                { id: '36', src: preporod41, alt: 'First dance' },
                { id: '37', src: preporod42, alt: 'First dance' },
            ],
        },
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
        'frano-romari': {
            title: 'Frano Topić - Sport sesija',
            description: '',
            date: '31.01.2026.',
            location: 'Stadion Dolac na Lašvi, BiH',
            coverImage: frano,
            images: [
                { id: '1', src: frano0, alt: 'Wedding ceremony' },
                { id: '2', src: frano1, alt: 'Bride and groom portrait' },
                { id: '3', src: frano2, alt: 'Bride and groom portrait' },
                { id: '4', src: frano3, alt: 'Wedding details' },
                { id: '5', src: frano4, alt: 'Wedding party' },
                { id: '6', src: frano5, alt: 'Wedding party' },
                { id: '7', src: frano6, alt: 'Bride and groom portrait' },
                { id: '8', src: frano7, alt: 'Wedding details' },
                { id: '9', src: frano8, alt: 'Wedding party' },
                { id: '10', src: frano9, alt: 'Wedding party' },
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

        'amila-pezer': {
            title: 'Amila Pezer - portret sesija',
            description: '',
            date: '22.05.2025.',
            location: 'Etno selo Čardaci Vitez, BiH',
            coverImage: amilap,
            images: [
                { id: '1', src: amila0, alt: 'Wedding ceremony' },
                { id: '2', src: amila1, alt: 'Bride and groom portrait' },
                { id: '3', src: amila2, alt: 'Bride and groom portrait' },
                { id: '4', src: amila3, alt: 'Wedding details' },
                { id: '5', src: amila4, alt: 'Wedding party' },
                { id: '6', src: amila5, alt: 'Wedding party' },
                { id: '7', src: amila6, alt: 'Wedding party' },
            ],
        },
        'tarik-sajra': {
            title: 'Tarik & Sajra',
            description: '',
            date: '11.03.2025.',
            location: 'Etno selo Čardaci Vitez, BiH',
            coverImage: tariksajra,
            images: [
                { id: '1', src: tariksajra0, alt: 'Wedding ceremony' },
                { id: '2', src: tariksajra1, alt: 'Bride and groom portrait' },
                { id: '3', src: tariksajra2, alt: 'Bride and groom portrait' },
                { id: '4', src: tariksajra3, alt: 'Wedding details' },
                { id: '5', src: tariksajra4, alt: 'Wedding party' },
                { id: '6', src: tariksajra5, alt: 'Wedding party' },
                { id: '7', src: tariksajra6, alt: 'Wedding party' },
                { id: '8', src: tariksajra7, alt: 'Wedding party' },
                { id: '9', src: tariksajra8, alt: 'Wedding party' },
                { id: '10', src: tariksajra9, alt: 'Wedding party' },
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
                { id: '3', src: slikanz2, alt: 'Wedding details' },
                { id: '4', src: slikanz3, alt: 'Wedding party' },
                { id: '5', src: slikanz4, alt: 'First dance' },
                { id: '6', src: slikanz5, alt: 'First dance' },
                { id: '7', src: slikanz6, alt: 'First dance' },
                { id: '8', src: slikanz7, alt: 'First dance' },
                { id: '9', src: slikanz8, alt: 'First dance' },
                { id: '10', src: slikanz9, alt: 'First dance' },
            ],
        },

        'mevludin-hana': {
            title: 'Mevludin & Hana',
            description: '',
            date: '27.12.2024.',
            location: 'Vitez, BiH',
            coverImage: mevlehana,
            images: [
                { id: '1', src: mevlehana0, alt: 'Wedding ceremony' },
                { id: '2', src: mevlehana1, alt: 'Bride and groom portrait' },
                { id: '3', src: mevlehana2, alt: 'Wedding details' },
                { id: '4', src: mevlehana3, alt: 'Wedding party' },
                { id: '5', src: mevlehana4, alt: 'First dance' },
            ],
        },
        'faris-adna': {
            title: 'Faris & Adna',
            description: '',
            date: '28.08.2024.',
            location: 'Travnik, BiH',
            coverImage: farisadna,
            images: [
                { id: '1', src: farisadna0, alt: 'Wedding ceremony' },
                { id: '2', src: farisadna1, alt: 'Bride and groom portrait' },
                { id: '3', src: farisadna2, alt: 'Wedding details' },
                { id: '4', src: farisadna3, alt: 'Wedding party' },
                { id: '5', src: farisadna4, alt: 'First dance' },
                { id: '6', src: farisadna5, alt: 'First dance' },
                { id: '7', src: farisadna6, alt: 'First dance' },
                { id: '8', src: farisadna7, alt: 'First dance' },
                { id: '9', src: farisadna8, alt: 'First dance' },
                { id: '10', src: farisadna9, alt: 'First dance' },
            ],
        },
        'haris-armina': {
            title: 'Haris & Armina',
            description: '',
            date: '16.08.2024.',
            location: 'Zenica, BiH',
            coverImage: harisarmina,
            images: [
                { id: '1', src: harisar0, alt: 'Wedding ceremony' },
                { id: '2', src: harisar1, alt: 'Bride and groom portrait' },
                { id: '3', src: harisar2, alt: 'Wedding details' },
                { id: '4', src: harisar3, alt: 'Wedding party' },
                { id: '5', src: harisar4, alt: 'First dance' },
                { id: '5', src: harisar5, alt: 'First dance' },
                { id: '6', src: harisar6, alt: 'First dance' },

            ],
        },

        'belma-hero-matura': {
            title: 'Belma Hero - matura',
            description: '',
            date: '24.05.2024.',
            location: 'Vitez, BiH',
            coverImage: belma,
            images: [
                { id: '1', src: belma0, alt: 'Wedding ceremony' },
                { id: '2', src: belma1, alt: 'Bride and groom portrait' },
                { id: '3', src: belma2, alt: 'Wedding details' },
                { id: '4', src: belma3, alt: 'Wedding party' },
                { id: '5', src: belma4, alt: 'First dance' },
                { id: '6', src: belma5, alt: 'First dance' },
                { id: '7', src: belma6, alt: 'First dance' },
                { id: '8', src: belma7, alt: 'First dance' },
                { id: '9', src: belma8, alt: 'First dance' },
                { id: '10', src: belma9, alt: 'First dance' },
                { id: '11', src: belma10, alt: 'Bride and groom portrait' },
                { id: '12', src: belma11, alt: 'Wedding details' },
                { id: '13', src: belma12, alt: 'Wedding party' },
                { id: '14', src: belma13, alt: 'First dance' },
                { id: '15', src: belma14, alt: 'First dance' },
                { id: '16', src: belma15, alt: 'First dance' },
                { id: '17', src: belma16, alt: 'First dance' },
                { id: '18', src: belma17, alt: 'First dance' },
                { id: '19', src: belma18, alt: 'First dance' },

            ],
        },
        'harisa-zejnic-matura': {
            title: 'Harisa Zejnić - matura',
            description: '',
            date: '24.05.2024.',
            location: 'Tvrđava Travnik, BiH',
            coverImage: harisa,
            images: [
                { id: '1', src: harisa0, alt: 'Wedding ceremony' },
                { id: '2', src: harisa1, alt: 'Bride and groom portrait' },
                { id: '3', src: harisa2, alt: 'Wedding details' },
                { id: '4', src: harisa3, alt: 'Wedding party' },
                { id: '5', src: harisa4, alt: 'First dance' },
                { id: '6', src: harisa5, alt: 'First dance' },
                { id: '7', src: harisa6, alt: 'First dance' },
                { id: '8', src: harisa7, alt: 'First dance' },
                { id: '9', src: harisa8, alt: 'First dance' },
                { id: '10', src: harisa9, alt: 'First dance' },
                { id: '11', src: harisa10, alt: 'Bride and groom portrait' },
                { id: '12', src: harisa11, alt: 'Wedding details' },
                { id: '13', src: harisa12, alt: 'Wedding party' },
                { id: '14', src: harisa13, alt: 'First dance' },
                { id: '15', src: harisa14, alt: 'First dance' },


            ],
        },
        'suana-hurem-matura': {
            title: 'Suana Hurem - matura',
            description: '',
            date: '17.05.2024.',
            location: 'Vitez, BiH',
            coverImage: suana,
            images: [
                { id: '1', src: suana0, alt: 'Wedding ceremony' },
                { id: '2', src: suana1, alt: 'Bride and groom portrait' },
                { id: '3', src: suana2, alt: 'Wedding details' },
                { id: '4', src: suana3, alt: 'Wedding party' },
                { id: '5', src: suana4, alt: 'First dance' },
                { id: '6', src: suana5, alt: 'First dance' },
                { id: '7', src: suana6, alt: 'First dance' },
                { id: '8', src: suana7, alt: 'First dance' },
                { id: '9', src: suana8, alt: 'First dance' },
                { id: '10', src: suana9, alt: 'First dance' },
                { id: '11', src: suana10, alt: 'Bride and groom portrait' },


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
        'Freiburg': {
            title: 'Freiburg',
            description: '',
            date: '01.08.2022.',
            location: 'Freiburg, Njemačka',
            coverImage: freiburg,
            images: [
                { id: '1', src: frei0, alt: 'Wedding ceremony' },
                { id: '2', src: frei1, alt: 'Bride and groom portrait' },
                { id: '3', src: frei2, alt: 'Wedding details' },
                { id: '4', src: frei3, alt: 'Wedding party' },
                { id: '5', src: frei4, alt: 'First dance' },
                { id: '6', src: frei5, alt: 'First dance' },
                { id: '7', src: frei6, alt: 'First dance' },
                { id: '8', src: frei7, alt: 'First dance' },
                { id: '9', src: frei8, alt: 'First dance' },

            ],
        },
        'Breisach-am-Rhein': {
            title: 'Breisach-am-Rhein',
            description: '',
            date: '29.07.2022.',
            location: 'Breisach-am-Rhein, Njemačka',
            coverImage: brajzah,
            images: [
                { id: '1', src: brei0, alt: 'Wedding ceremony' },
                { id: '2', src: brei1, alt: 'Bride and groom portrait' },
                { id: '3', src: brei2, alt: 'Wedding details' },
                { id: '4', src: brei3, alt: 'Wedding party' },
                { id: '5', src: brei4, alt: 'First dance' },
                { id: '6', src: brei5, alt: 'First dance' },
                { id: '7', src: brei6, alt: 'First dance' },
                { id: '8', src: brei7, alt: 'First dance' },

            ],
        },
        'strasburg-france': {
            title: 'Strasburg',
            description: '',
            date: '16.07.2022.',
            location: 'Strasburg, Njemačka',
            coverImage: strasburg,
            images: [
                { id: '1', src: stras0, alt: 'Wedding ceremony' },
                { id: '2', src: stras1, alt: 'Bride and groom portrait' },
                { id: '3', src: stras2, alt: 'Wedding details' },
                { id: '4', src: stras3, alt: 'Wedding party' },
                { id: '5', src: stras4, alt: 'First dance' },
                { id: '6', src: stras5, alt: 'First dance' },
                { id: '7', src: stras6, alt: 'First dance' },
                { id: '8', src: stras7, alt: 'First dance' },
                { id: '9', src: stras8, alt: 'First dance' },
                { id: '10', src: stras9, alt: 'First dance' },
                { id: '11', src: stras10, alt: 'First dance' },
                { id: '12', src: stras11, alt: 'First dance' },
                { id: '13', src: stras12, alt: 'First dance' },
                { id: '14', src: stras13, alt: 'First dance' },
                { id: '15', src: stras14, alt: 'First dance' },
                { id: '16', src: stras15, alt: 'First dance' },
                { id: '17', src: stras16, alt: 'First dance' },
                { id: '18', src: stras17, alt: 'First dance' },
                { id: '19', src: stras18, alt: 'First dance' },
                { id: '20', src: stras19, alt: 'First dance' },
                { id: '21', src: stras20, alt: 'First dance' },
                { id: '22', src: stras21, alt: 'First dance' },
                { id: '23', src: stras22, alt: 'First dance' },
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

    useEffect(() => {
        if (event) {
            ReactGA.event({
                action: 'view_album',
                params: {
                    album_id: eventId,
                    album_title: event.title,
                    album_location: event.location
                }
            });
        }
    }, [eventId, event]);

    if (!event) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
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