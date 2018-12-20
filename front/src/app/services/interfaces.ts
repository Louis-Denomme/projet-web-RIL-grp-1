class Adresse {
    ADR_IDTADR: number;
    ADR_NUM: number;
    ADR_COMP: string;
    ADR_VOIE: string;
    ADR_CODEPOSTAL: number;
    ADR_VILLE: string;
    ADR_PAYS: string;
    ADR_VALIDE: boolean;
}

class Agence {
    AGC_IDTAGC: number;
    AGC_IDTADR: number;
    AGC_IDTPHO: number;
    AGC_NOM: string;
    AGC_TEL: string;
    AGC_EMAIL: string;
    AGC_FAX: string;
    AGC_VALIDE: boolean;
}

class Agent {
    AGT_IDTAGT: number;
    AGT_IDPRF: number;
    AGT_IDTAGC: number;
    AGT_IDTADR: number;
    AGT_NOM: string;
    AGT_PRENOM: string;
    AGT_TEL: string;
    AGT_MOBILE: string;
    AGT_FAX: string;
    AGT_EMAIL: string;
    AGT_LOGIN: string;
    AGT_PWD: string;
    AGT_SEL: string;
    AGT_VALIDE: boolean;
}

class Client {
    CLI_IDTCLI: number;
    CLI_IDTADR: number;
    CLI_NOM: string;
    CLI_PRENOM: string;
    CLI_TEL: number;
    CLI_EMAIL: string;
    CLI_FAX: number;
    CLI_MOBILE: number;
    CLI_DATECRE: Date;
    CLI_VALIDE: boolean;
}

class Droit {
    DRT_IDDRT: number;
    DRT_LIBELLE: string;
    DRT_VALIDE: boolean;
}

class Historique {
    HIS_IDTHIS: number;
    HIS_IDTTPH: number;
    HIS_IDTVHL: number;
    HIS_IDTAGC: number;
    HIS_IDTCLI: number;
    HIS_IDTAGT: number;
    HIS_DATEMODIF: number;
}

class Lien_cli_vhl {
    LCV_IDTLCV: number;
    LCV_IDTCLI: number;
    LCV_IDTVHL: number;
    LCV_DATEDEPART: Date;
    LCV_DATERETOUR: Date;
    LCV_DATERETOUR_EFF: Date;
    LCV_VALIDE: boolean;
}

class Lien_prf_drt {
    LPD_IDTLPD: number;
    LPD_IDTPRF: number;
    LPD_IDTDRT: number;
}

class Photo {
    PHO_IDTPHO: number;
    PHO_IDTAGC: number;
    PHO_IDTVHL: number;
    PHO_URL: string;
    PHO_VALIDE: boolean;
}

class Profil {
    PRF_IDTPRF: number;
    PRF_LIBELLE: string;
    PRF_VALIDE: boolean;
}

class Statut {
    STT_IDTSTT: number;
    STT_LIBELLE: string;
    STT_COULEUR: string;
    STT_VALIDE: boolean;
}

class Typehisto {
    TPH_IDTTPH: number;
    TPH_LIBELLE: string;
    TPH_VALIDE: boolean;
}

class Vehicule {
    VHL_IDTVHL: number;
    VHL_IDTAGC: number;
    VHL_IDTSTT: number;
    VHL_MODELE: string;
    VHL_DATECRICULATION: Date;
    VHL_HAUTEUR: number; // decimal
    VHH_LARGEUR: number; // decimal
    VHL_LONGUEUR: number; // decimal
    VHL_POIDS: number; // decimal
    VHL_PUISSANCE: number; // decimal
    VHL_DATE_CTRL_TCH_PRC: Date;
    VHL_DATE_CTRL_SVT: Date;
    VHL_KILOMETRAGE: number;
    VHL_IMMATRICULATION: string;
    VHL_PERMIS: string;
    VHL_CARBURANT: string;
    VHL_CAPASTCK: number; //decimal
    VHL_CLASSEECO: string;
    VHL_VALIDE: boolean;
}

export { Adresse };
export { Agence };
export { Agent };
export { Client };
export { Droit };
export { Historique };
export { Lien_cli_vhl };
export { Lien_prf_drt };
export { Photo };
export { Profil };
export { Statut };
export { Typehisto };
export { Vehicule };