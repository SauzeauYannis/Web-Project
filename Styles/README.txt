Le découpage de fichier ce fait comme décrit ci-dessous :

	- Un fichier de style commun (StyleCommun.css) qui est importé sur :

		- Un fichier de style principal (StyleDeBase.css) qui est importé sur :

		    - Un fichier de style pour l'index (IndexNorm.css)
			- Un fichier de style pour les fiches (ContentNorm.css)
			- Un fichier de style pour le plan du site (PlanNorm.css)
			- Un fichier de style pour le tableau (TabNorm.css)	

		- Un fichier de style pour les malvoyants (StyleMalvoyant.css) qui est importé sur :

		   	- Un fichier de style pour l'index (IndexMalvoyant.css)
			- Un fichier de style pour les fiches (ContentMalvoyant.css)
			- Un fichier de style pour le plan du site (PlanMalvoyant.css)
			- Un fichier de style pour le tableau (TaMalvoyantb.css)

    - Des fichiers de style principaux pour chaque types de pages qui seront ensuite importés dans les fichiers du dessus :

    	- Un fichier de style pour l'index (Index.css)
		- Un fichier de style pour les fiches (Content.css)
		- Un fichier de style pour le plan du site (Plan.css)
		- Un fichier de style pour le tableau (Tab.css)