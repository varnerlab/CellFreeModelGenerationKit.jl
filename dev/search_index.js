var documenterSearchIndex = {"docs":
[{"location":"vffformat/#VFF-format","page":"VFF","title":"VFF format","text":"","category":"section"},{"location":"vffformat/","page":"VFF","title":"VFF","text":"VFF format is designed to be the standard input format of CFMG.jl. Aside from comments marked by preceding two slashes '//', each VFF file contains three parts: TXTL-SEQUENCE, metabolism, and gene regulatory network. Each part has its start and end marks, and specific syntactic format for describing biological information.","category":"page"},{"location":"vffformat/#TXTL-SEQUENCE","page":"VFF","title":"TXTL-SEQUENCE","text":"","category":"section"},{"location":"vffformat/","page":"VFF","title":"VFF","text":"item des\nStart #TXTL-SEQUENCE::START\nEnd #TXTL-SEQUENCE::STOP\nFormat {X|L},{symbol1},{symbol2}::sequence;\nArgument Description\n{X|L} {'X' denotes transcription, while 'L' denoting translation}\n{symbol1} {gene or protein symbol}\n{symbol2} {'RX' or 'RL' denoting RNAP_symbol or Ribosome_symbol, respectively}\n{sequence} {gene or protein sequence}\nExample {X,cI_ssrA,RX::atgagcacaaaaaagaaaccattaacacaagagcagcttgaggacgcacgtcgccttaaagc;} {L,cI_ssrA,RL::MSTKKKPLTQEQLEDARRLKAIYEKKKNELGLSQESVADKMGMGQS;}","category":"page"},{"location":"vffformat/#METABOLISM","page":"VFF","title":"METABOLISM","text":"","category":"section"},{"location":"vffformat/","page":"VFF","title":"VFF","text":"item des\nStart #METABOLISM::START\nEnd {#METABOLISM::STOP}\nFormat {name, [ECs],reactant,product,is_reversible}\nArgument Description\nname {unique string denoting reaction name}\nECs {';' delimited set of ec numbers, use '[]' if no EC}\nreactant {reactant symbols connected by '+', metabolite symbols can not have special chars or spaces, stochiometric coefficients are pre-pended to metabolite symbol}\nproduct {product symbols connected by '+', metabolite symbols can not have special chars or spaces, stochiometric coefficients are pre-pended to metabolite symbol}\nis_reversible {true\nExample {R_A_syn_2,[6.3.4.13],M_atp_c+M_5pbdra+M_gly_L_c,M_adp_c+M_pi_c+M_gar_c,false} {R_adhE,[1.2.1.10;1.1.1.1],M_accoa_c+2M_h_c+2M_nadh_c,M_etoh_c+2*M_nad_c,true}","category":"page"},{"location":"vffformat/","page":"VFF","title":"VFF","text":"{M_h2s_c_exchange,[],[],M_h2s_c,true}","category":"page"},{"location":"vffformat/#Gene-regulatory-network","page":"VFF","title":"Gene regulatory network","text":"","category":"section"},{"location":"vffformat/","page":"VFF","title":"VFF","text":"item des\nStart {#GRN::START}\nEnd {#GRN::STOP}\nFormat {actors action target}\nArgument Description\nactors {comma ',' delimited list of actors}\naction {activate, activates, activated, induce, induces, induced, inhibit, inhibits, inhibited, repress, represses, represses}\ntarget {the target}\nExample {cI_ssrA inhibits deGFP_ssrA} {s70 activates deGFP_ssrA}","category":"page"},{"location":"model_generation/#VFF-File-Structure","page":"Generation","title":"VFF File Structure","text":"","category":"section"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"CellFreeModelGenerationKit.jl transforms a structured text file into cell free model code. CellFreeModelGenerationKit.jl text files consist of delimited record types organized into five sections BIO-TYPE-PREFIXES, TXTL-SEQUENCE, METABOLISM, SPECIES-BOUNDS and GRN. Lines beginning with // are comments which are excluded by default. This can be modified by passing strip_comments = false to the read_model_document method.","category":"page"},{"location":"model_generation/#BIO-TYPE-PREFIXES-section","page":"Generation","title":"BIO-TYPE-PREFIXES section","text":"","category":"section"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"Bio-type prefixes records are used to identify and declare the types of species.","category":"page"},{"location":"model_generation/#Example","page":"Generation","title":"Example","text":"","category":"section"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"#BIO-TYPE-PREFIXES::START\n\n// Declare type prefixes -\ng is a GENE type\np is a PROTEIN type\nmRNA is a MESSENGER-RNA type\ntRNA is a TRANSFER-RNA type\nregRNA is a REGULATORY-RNA type\nM is a METABOLITE type\n\n#BIO-TYPE-PREFIXES::STOP","category":"page"},{"location":"model_generation/#TXTL-SEQUENCE-section","page":"Generation","title":"TXTL-SEQUENCE section","text":"","category":"section"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"TXTL-SEQUENCE records","category":"page"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"TXTL-SEQUENCE records are used to generate sequence specific transcription and translation reactions which are appended to the end of the metabolic reactions encoded in the METABOLISM section. TXTL-SEQUENCE records take the form:","category":"page"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"{genesymbol|proteinsymbol}, sequence; where:","category":"page"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"{genesymbol|proteinsymbol}: species symbol used in the model. The species symbol is a user specified identifier that is used in the model. No spaces or special chars, _ are acceptable, but +,- etc are not acceptable. sequence: nucleotide (X record) or protein (L) sequence in plain format.","category":"page"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"TXTL-SEQUENCE records are terminated by a ; character.","category":"page"},{"location":"model_generation/#Example-2","page":"Generation","title":"Example","text":"","category":"section"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"#TXTL-SEQUENCE::START\n\n// -- deGFP-ssrA gene and protein -------------------------------------------- //\ng_deGFP-ssrA,atggagcttttcactggcgttgttcccatcctggtcgagctggacggcgacgtaaacggccacaagttcagcgtgtccggc\ngagggcgagggcgatgccacctacggcaagctgaccctgaagttcatctgcaccaccggcaagctgcccgtgccctggccc\naccctcgtgaccaccctgacctacggcgtgcagtgcttcagccgctaccccgaccacatgaagcagcacgacttcttcaag\ntccgccatgcccgaaggctacgtccaggagcgcaccatcttcttcaaggacgacggcaactacaagacccgcgccgaggtg\naagttcgagggcgacaccctggtgaaccgcatcgagctgaagggcatcgacttcaaggaggacggcaacatcctggggcac\naagctggagtacaactacaacagccacaacgtctatatcatggccgacaagcagaagaacggcatcaaggtgaacttcaag\natccgccacaacatcgaggacggcagcgtgcagctcgccgaccactaccagcagaacacccccatcggcgacggccccgtg\nctgctgcccgacaaccactacctgagcacccagtccgccctgagcaaagaccccaacgagaagcgcgatcacatggtcctg\nctggagttcgtgaccgccgccgggatcgcagcaaacgacgaaaactacgctttagctgcttaa;\n\np_deGFP-ssrA,MELFTGVVPILVELDGDVNG\nHKFSVSGEGEGDATYGKLTL\nKFICTTGKLPVPWPTLVTTL\nTYGVQCFSRYPDHMKQHDFF\nKSAMPEGYVQERTIFFKDDG\nNYKTRAEVKFEGDTLVNRIE\nLKGIDFKEDGNILGHKLEYN\nYNSHNVYIMADKQKNGIKVN\nFKIRHNIEDGSVQLADHYQQ\nNTPIGDGPVLLPDNHYLSTQ\nSALSKDPNEKRDHMVLLEFV\nTAAGIAANDENYALAA;\n\n#TXTL-SEQUENCE::STOP","category":"page"},{"location":"model_generation/#METABOLISM-section","page":"Generation","title":"METABOLISM section","text":"","category":"section"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"METABOLISM records are used to encode metabolic reactions. METABOLISM records consist of five fields.","category":"page"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"reactionname, [{; delimited set of ec numbers | []}], reactantstring, product_string, reversible tag; where:","category":"page"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"reactionname is a unique identifier for the reaction. reactantstring includes all the reactants participating the reaction. product_string includes all products of the reaction.  reversible tag is true if the reactions is reversible, otherwise it is false.","category":"page"},{"location":"model_generation/#Example-3","page":"Generation","title":"Example","text":"","category":"section"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"#METABOLISM::START\n\n// ======================================================================\n// GLYCOLYSIS/ GLUCONEOGENESIS\n// ======================================================================\n// Glycogen phosphorylate (gP) 2.4.1.1\nR_gp_1,[2.4.1.1],M_maltodextrin6_c+M_pi_c,M_maltodextrin5_c+M_g1p_c,false\nR_gp_2,[2.4.1.1],M_maltodextrin5_c+M_pi_c,M_maltodextrin4_c+M_g1p_c,false\nR_gp_3,[2.4.1.1],M_maltodextrin4_c+M_pi_c,M_maltodextrin3_c+M_g1p_c,false\nR_gp_4,[2.4.1.1],M_maltodextrin3_c+M_pi_c,M_maltose_c+M_g1p_c,false\nR_gp,[2.4.1.1],M_maltose_c+M_pi_c,M_glc_D_c+M_g1p_c,false\n\n// Phosphoglucomutase (pgm) 5.4.2.2\nR_pgm,[5.4.2.2],M_g1p_c,M_g6p_c,false\n\n// Glucokinase (glk) EC 2.7.1.2\nR_glk_atp,[2.7.1.2],M_atp_c+M_glc_D_c,M_adp_c+M_g6p_c,false\n\n// Phosphoglucose isomerase (pgi) 5.3.1.9\nR_pgi,[5.3.1.9],M_g6p_c,M_f6p_c,true\n\n#METABOLISM::STOP","category":"page"},{"location":"model_generation/#SPECIES_BOUNDS-section","page":"Generation","title":"SPECIES_BOUNDS section","text":"","category":"section"},{"location":"model_generation/#Example-4","page":"Generation","title":"Example","text":"","category":"section"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"#SPECIES_BOUNDS::START\n\nM_o2_e is a SOURCE\nM_co2_e is a SINK\nM_h_e is UNBOUNDED\n\n#SPECIES_BOUNDS::STOP","category":"page"},{"location":"model_generation/#GRN-section","page":"Generation","title":"GRN section","text":"","category":"section"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"GRN records are used to define the biology of the model being generated. In this section, define various types of species (promoters, genes and polymerases) involved in the regulatory circuit and their regulatory action.","category":"page"},{"location":"model_generation/#Example-5","page":"Generation","title":"Example","text":"","category":"section"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"#GRN::START\n\n// What are my promoters, genes and polymerases in the circuit?\nP70 is a promoter\nP28 is a promoter\ng_deGFP-ssrA is a gene\ng_cI-ssrA is a gene\ng_s28 is a gene\nRNAP is a RNA_POLYMERASE_II_SYMBOL\nRIBOSOME is a RIBOSOME_SYMBOL\n\n// formation of s70_RNAP and s28_RNAP -\np_s70 binds to RNAP and forms s70_RNAP\np_s28 binds to RNAP and forms s28_RNAP\n\n// P70 promoter TX/TL activity -\ns70_RNAP binds to P70 and activates g_deGFP-ssrA expression to form mRNA_deGFP-ssrA\nmRNA_deGFP-ssrA is translated by RIBOSOME to form p_deGFP_ssrA\ns70_RNAP binds to P70 and activates g_s28 expression to form mRNA_s28\nmRNA_s28 is translated by RIBOSOME to form p_s28\n\n// P28 promoter activity -\ns28_RNAP binds to P28 and activates g_cI-ssrA expression to form mRNA_cI-ssrA\n\n// p_cI-ssrA action -\np_cI-ssrA binds to P70 and inhibits g_s28 expression\np_cI-ssrA binds to P70 and inhibits g_deGFP-ssrA expression\n\n#GRN::STOP","category":"page"},{"location":"model_generation/#Generating-Model-Code","page":"Generation","title":"Generating Model Code","text":"","category":"section"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"To generate cell free model code, first load the CellFreeModelGenerationKit.jl package, then build a Julia model object from the REPL using the command build_julia_model_object.","category":"page"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"build_julia_model_object","category":"page"},{"location":"model_generation/#CellFreeModelGenerationKit.build_julia_model_object","page":"Generation","title":"CellFreeModelGenerationKit.build_julia_model_object","text":"build_julia_model_object(path_to_model_file::String, path_to_output_dir::String; \n    defaults_file_name::String=\"Defaults.toml\", model_type::Symbol=:static)::VLResult\n\nBuild a static or dynamic data object in Julia language. If a TOML file with default parameter values is not provided by the user, a `Defaults.toml` file is generated automatically. Additionally, the user can edit the generated `Defaults.toml` file with their own values. After generating code, if a directory already exists at the user specified location, it can be deleted or backed-up before new code is written based on user input.\n\nInput arguments:\n`path_to_model_file::String` - user-specified path to read the Network.vff file from as well as the Defaults.toml file (if it already exists)\n`path_to_output_dir::String` - path to where generated code will be written\n`defaults_file_name::String` - name of the TOML file with default parameter values (optional).\n`model_type::Symbol` - type of model to generate (static/ dynamic) (optional).\n\nOutput arguments:\n`model_object::VLResult{VLJuliaModelObject}` - abstract Julia data object holding information for generating model code.\n\n\n\n\n\n","category":"function"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"Note that path where files will be written should be different from where model file is.","category":"page"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"julia> using CellFreeModelGenerationKit\njulia> build_result = build_julia_model_object(path_to_test_metabolism_file, path_to_output_dir)\njulia> julia_model_object = build_result.value","category":"page"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"The build_julia_model_object reads the model file and a defaults TOML file (if it exists) at the user specified path. If a defaults file is not provided by the user, a Defaults.toml file is generated. Additionally, the user can modify the contents of Defaults.toml. ","category":"page"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"For writing generated code, if a directory already exists at the user specified location, it can be backed-up before new code is written (based on prompted user input). After building a Julia model object, issue the command generate from the REPL.","category":"page"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"generate","category":"page"},{"location":"model_generation/#CellFreeModelGenerationKit.generate","page":"Generation","title":"CellFreeModelGenerationKit.generate","text":"generate(julia_model_object::VLJuliaModelObject; \nintermediate_representation_dictionary::Union{Nothing,Dict{String,Any}} = nothing, \nlogger::Union{Nothing,SimpleLogger} = nothing)\n\nGenerate model code from a Julia data object and write generated code to the user-defined output directory.\n\nInput arguments: julia_model_object::VLJuliaModelObject - abstract data object for generating model code in Julia language. intermediate_representation_dictionary::Union{Nothing,Dict{String,Any}} - an intermediate data dictionary for building model code (optional). logger::Union{Nothing,SimpleLogger} - logger to log information during the code generation process (optional).\n\nOutput arguments: None\n\n\n\n\n\n","category":"function"},{"location":"model_generation/","page":"Generation","title":"Generation","text":"julia> generate(julia_model_object)","category":"page"},{"location":"generated_files/#Generated-files","page":"Files","title":"Generated files","text":"","category":"section"},{"location":"generated_files/","page":"Files","title":"Files","text":"CellFreeModelGenerationKit.jl generates the following files for a Static problem:","category":"page"},{"location":"generated_files/","page":"Files","title":"Files","text":"Filename | Description – | :– Include.jl | Includes all the generated files into the current workspace Static.jl | Solves the static Flux Balance Analysis (FBA) problem Checks.jl | Checks whether or not a file with the given name exists in the current directory Constraints.jl | Encodes the bounds for the fluxes as well as the species for the FBA problem. Also generates the objective function for maximization or minimization in the Linear Programming Problem Control.jl | Encodes the control logic described in your GRN network file Data.jl | Encodes the model parameters e.g., initial conditions or promoter function parameters in a Julia dictionary Flux.jl | Computes the optimal metabolic flux distribution given the constraints using GLPK.jl Kinetics.jl | Encodes the rate of transcription, translation and degradation for mRNA and protein species Network.dat | Stoichiometric array for the metabolism as well as transcription and translation reactions Solver.jl | Contains the functions required for solving a static or dynamic FBA problem Types.jl | Contains abstract and concrete data types used for model generation and calculation Utility.jl | Encodes utility functions required for model calculation (e.g., computation of the Jacobian)","category":"page"},{"location":"#Introduction","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Cell free biology is an emerging technology for research, and the point of care manufacturing of a wide array of macromolecular and small molecule products. A distinctive feature of cell free systems is the absence of cellular growth and maintenance, thereby allowing the direct allocation of carbon and energy resources toward a product of interest. Moreover, cell free systems are more amenable than living systems to observation and manipulation, hence allowing rapid tuning of reaction conditions. Recent advances in cell free extract preparation and energy regeneration mechanisms have increased the versatility and range of applications that can be produced cell free. Thus, the cell free platform has transformed from merely an investigative research tool to become a promising alternative to traditionally used living systems for biomanufacturing as well as biological research. In combination with the rise of synthetic biology, cell free systems today have not only taken on a new role as a promising technology for just in time manufacturing of therapeutically important biologics and high-value small molecules, but have also been utilized for applications such as biosensing, prototyping genetic parts, and metabolic engineering.","category":"page"},{"location":"#CellFreeModelGenerationKit.jl","page":"Home","title":"CellFreeModelGenerationKit.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A package for building cell-free models in Julia language. The purpose of this package is to generate model code for performing constraint-based modeling like flux balance analysis (FBA).","category":"page"},{"location":"#Installation-and-Requirements","page":"Home","title":"Installation and Requirements","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"CellFreeModelGenerationKit.jl is open source, available under a MIT software license.  You can download this repository as a zip file, clone or pull it by using the command (from the command-line):","category":"page"},{"location":"","page":"Home","title":"Home","text":"$ git clone https://github.com/varnerlab/CellFreeModelGenerationKit.git","category":"page"},{"location":"","page":"Home","title":"Home","text":"CellFreeModelGenerationKit.jl is organized as a Julia package which can be installed in the package mode of Julia. Open the Julia REPL and enter the package mode using the ] key. Then, at the prompt enter:","category":"page"},{"location":"","page":"Home","title":"Home","text":"(@v1.5) pkg> add https://github.com/varnerlab/CellFreeModelGenerationKit.git","category":"page"},{"location":"","page":"Home","title":"Home","text":"This will install the CellFreeModelGenerationKit.jl package and the other required packages. CellFreeModelGenerationKit.jl requires Julia 1.5.x and above. There are several other packages that are required to run the model. However, these should be installed automatically the first time you run your code. The linear programming problem is solved using the GLPK solver, which is freely available for a variety of platforms. The following dependencies are installed: DataFrames, CSV, Dates, Logging, WordTokenizers, DelimitedFiles and SQLite.","category":"page"},{"location":"#Methods-(why-here?)","page":"Home","title":"Methods (why here?)","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Modules = [CellFreeModelGenerationKit]","category":"page"},{"location":"#CellFreeModelGenerationKit.build_control_program_component-Tuple{Dict{String,Any}}","page":"Home","title":"CellFreeModelGenerationKit.build_control_program_component","text":"Function: build_control_program_component(intermediate_dictionary::Dict{String,Any})::VLResult\n\nGenerate Control.jl. Control.jl includes methods to calculate transcription and translation control functions at time t.\n\nInput arguments:\n`intermediate_dictionary::Dict{String,Any}` - data dictionary containing the master reaction table and molecular species participating in the reactions.\n\nOutput arguments:\n`VLResult::VLResult` - concrete data type holding control values for each rate.\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.build_data_dictionary_program_component-Tuple{Dict{String,Any}}","page":"Home","title":"CellFreeModelGenerationKit.build_data_dictionary_program_component","text":"build_data_dictionary_program_component(intermediate_dictionary::Dict{String,Any})::VLResult\n\nGenerate Data.jl. Data.jl includes a method to build a default data dictionary. This dictionary will contain information about the model system along with default bounds useful for flux balance analysis.\n\nInput arguments:\n`intermediate_dictionary::Dict{String,Any}` - data dictionary containing the master reaction table and molecular species participating in the reactions.\n\nOutput arguments:\n`VLResult::VLResult` - concrete data type holding the data dictionary.\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.build_julia_model_object-Tuple{String,String}","page":"Home","title":"CellFreeModelGenerationKit.build_julia_model_object","text":"build_julia_model_object(path_to_model_file::String, path_to_output_dir::String; \n    defaults_file_name::String=\"Defaults.toml\", model_type::Symbol=:static)::VLResult\n\nBuild a static or dynamic data object in Julia language. If a TOML file with default parameter values is not provided by the user, a `Defaults.toml` file is generated automatically. Additionally, the user can edit the generated `Defaults.toml` file with their own values. After generating code, if a directory already exists at the user specified location, it can be deleted or backed-up before new code is written based on user input.\n\nInput arguments:\n`path_to_model_file::String` - user-specified path to read the Network.vff file from as well as the Defaults.toml file (if it already exists)\n`path_to_output_dir::String` - path to where generated code will be written\n`defaults_file_name::String` - name of the TOML file with default parameter values (optional).\n`model_type::Symbol` - type of model to generate (static/ dynamic) (optional).\n\nOutput arguments:\n`model_object::VLResult{VLJuliaModelObject}` - abstract Julia data object holding information for generating model code.\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.build_kinetics_program_component-Tuple{Dict{String,Any}}","page":"Home","title":"CellFreeModelGenerationKit.build_kinetics_program_component","text":"build_kinetics_dictionary_program_component(intermediate_dictionary::Dict{String,Any})::VLResult\n\nGenerate Kinetics.jl. Kinetics.jl includes methods to calculate transcription and translation rates based on biophysical model parameters.\n\nInput arguments:\n`intermediate_dictionary::Dict{String,Any}` - data dictionary containing the master reaction table and molecular species participating in the reactions.\n\nOutput arguments:\n`VLResult::VLResult` - concrete data type holding all rates.\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.generate-Tuple{VLJuliaModelObject}","page":"Home","title":"CellFreeModelGenerationKit.generate","text":"generate(julia_model_object::VLJuliaModelObject; \nintermediate_representation_dictionary::Union{Nothing,Dict{String,Any}} = nothing, \nlogger::Union{Nothing,SimpleLogger} = nothing)\n\nGenerate model code from a Julia data object and write generated code to the user-defined output directory.\n\nInput arguments: julia_model_object::VLJuliaModelObject - abstract data object for generating model code in Julia language. intermediate_representation_dictionary::Union{Nothing,Dict{String,Any}} - an intermediate data dictionary for building model code (optional). logger::Union{Nothing,SimpleLogger} - logger to log information during the code generation process (optional).\n\nOutput arguments: None\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.generate_default_project_file-Tuple{String}","page":"Home","title":"CellFreeModelGenerationKit.generate_default_project_file","text":"generate_default_project(path_to_project_dir::String)::VLResult\n\nGenerates a default project structure which contains an empty model file and Defaults.toml file.\n\nInput arguments: path_to_project_file::String - path to where you want model code to be generated\n\nOutput arguments: None\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.generate_stoichiometric_matrix-Tuple{Dict{String,Any}}","page":"Home","title":"CellFreeModelGenerationKit.generate_stoichiometric_matrix","text":"generate_stoichiometric_matrix(intermediate_dictionary::Dict{String,Any})::VLResult\n\nGenerate a stoichiometric matrix based on the biochemical model reaction network.\n\nInput arguments:\n`intermediate_dictionary::Dict{String,Any}` - data dictionary containing the master reaction table and molecular species participating in the reactions.\n\nOutput arguments:\n`VLResult::VLResult` - concrete data type holding the generated stoichiometric matrix.\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.parse_vff_bio_types_section-Tuple{Array{String,1}}","page":"Home","title":"CellFreeModelGenerationKit.parse_vff_bio_types_section","text":"parse_vff_bio_types_section(buffer::Array{String,1})::VLResult\n\nParse contents of the model file and tokenize biological types. The bio-types section is written between the tags #BIO-TYPE-PREFIXES::START and #BIO-TYPE-PREFIXES::STOP. \n\nInput arguments: buffer::Array{String,1} - single array holding information extracted from the model file.\n\nOutput arguments: VLResult::VLResult - concrete type holding information on biological types.\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.parse_vff_grn_section-Tuple{Array{String,1}}","page":"Home","title":"CellFreeModelGenerationKit.parse_vff_grn_section","text":"parse_vff_grn_section(buffer::Array{String,1})::VLResult\n\nParse contents of the GRN section in the model file and extract information contained on gene regulation. The GRN section is written between the tags #GRN::START and #GRN::STOP. \n\nInput arguments: buffer::Array{String,1} - 1-D array holding information extracted from the model file.\n\nOutput arguments: VLResult::VLResult - concrete type holding information on the gene regulatory network.\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.parse_vff_metabolic_section-Tuple{Array{String,1}}","page":"Home","title":"CellFreeModelGenerationKit.parse_vff_metabolic_section","text":"parse_vff_metabolic_section(buffer::Array{String,1})::VLResult\n\nParse contents of the metabolic section in the model file and extract all biochemical reactions and molecular species involved in the metabolic network. The metabolic section is written between the tags #METABOLISM::START and #METABOLISM::STOP.\n\nInput arguments: buffer::Array{String,1} - single array holding information extracted from the model file.\n\nOutput arguments: VLResult::VLResult - concrete type holding information on reactions and species involved in metabolism.\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.parse_vff_model_document-Tuple{CellFreeModelGenerationKit.VLAbstractModelObject}","page":"Home","title":"CellFreeModelGenerationKit.parse_vff_model_document","text":"parse_vff_model_document(model::VLAbstractModelObject)::VLResult\n\nParse contents of the model file, extract information from various sections of the file and construct a rudimentary data dictionary.\n\nInput arguments: model::VLAbstractModelObject - abstract Julia data object holding information for generating model code.\n\nOutput arguments: VLResult::VLResult - concrete type holding an intermediate data dictionary construction.\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.parse_vff_sequence_section-Tuple{Array{String,1}}","page":"Home","title":"CellFreeModelGenerationKit.parse_vff_sequence_section","text":"parse_vff_sequence_section(buffer::Array{String,1})::VLResult\n\nParse contents of the sequence section in the model file and extract amino acid and nucleotide sequences for protein and DNA, respectively. The sequence section is written between the tags #TXTL-SEQUENCE::START and #TXTL-SEQUENCE::STOP.\n\nInput arguments: buffer::Array{String,1} - 1-D array holding information extracted from the model file.\n\nOutput arguments: VLResult::VLResult - concrete type holding protein and DNA sequence information.\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.parse_vff_species_bounds_section-Tuple{Array{String,1}}","page":"Home","title":"CellFreeModelGenerationKit.parse_vff_species_bounds_section","text":"parse_vff_species_bounds_section(buffer::Array{String,1}, metabolic_results_tuple::NamedTuple)::VLResult\n\nParse contents of the model file and extract information on species bounds. The species bounds section is written between the tags #SPECIESBOUNDS::START and #SPECIESBOUNDS::STOP.\n\nInput arguments: buffer::Array{String,1} - 1-D array holding information extracted from the model file.\n\nOutput arguments: VLResult::VLResult - concrete type holding information on species bounds.\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.read_model_document-Tuple{String}","page":"Home","title":"CellFreeModelGenerationKit.read_model_document","text":"read_model_document(path_to_file::String; \n        strip_comments::Bool = true)::Array{String,1}\n\nRead each line of the Network.vff input file and extract contents of the file. Comments in the file (beginning by `//` symbol) are excluded by default, which can be overridden by the user.\n\nInput arguments:\n`path_to_file::String` - user-specified path where the Network.vff input file can be found and parsed\n`strip_comments::Bool` - if true, comment lines (beginning by ‘//’ symbol) are excluded by the parser (optional).\n\nOutput arguments:\n`buffer::Array{String,1}` - single array holding information extracted from the Network.vff file.\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.reorder_molecular_symbol_array-Tuple{Array{String,1}}","page":"Home","title":"CellFreeModelGenerationKit.reorder_molecular_symbol_array","text":"reorder_molecular_symbol_array(symbol_array::Array{String,1}; \n      callback::Union{Function,Nothing} = nothing)::Array{String,1}\n\nReorder species symbol names alphabetically (default implementation) unless a callback function is passed, in which case sorting is done based on the user-defined routine.\n\nInput arguments:\n`symbol_array::Array{String,1}` - array holding symbol names for all molecular species in the network.\n`callback::Union{Function,Nothing}` - user-defined function to reorder species symbol names (optional).\n\nOutput arguments:\n`symbol_array::Array{String,1}` - sorted molecular species symbol array.\n\n\n\n\n\n","category":"method"},{"location":"#CellFreeModelGenerationKit.reorder_reaction_symbol_array-Tuple{Array{String,1}}","page":"Home","title":"CellFreeModelGenerationKit.reorder_reaction_symbol_array","text":"reorder_reaction_symbol_array(symbol_array::Array{String,1}; \n      callback::Union{Function,Nothing} = nothing)::Array{String,1}\n\nReorder reaction symbol names alphabetically (default implementation) unless a callback function is passed, in which case sorting is done based on the user-defined routine.\n\nInput arguments:\n`symbol_array::Array{String,1}` - array holding symbol names for all reactions in the network.\n`callback::Union{Function,Nothing}` - user-defined function to reorder reaction names (optional).\n\nOutput arguments:\n`symbol_array::Array{String,1}` - sorted reaction symbol array.\n\n\n\n\n\n","category":"method"},{"location":"parser/#Parser","page":"Parser","title":"Parser","text":"","category":"section"},{"location":"parser/","page":"Parser","title":"Parser","text":"Parser details go here. ","category":"page"},{"location":"parser/","page":"Parser","title":"Parser","text":"parse_vff_sequence_section","category":"page"},{"location":"parser/#CellFreeModelGenerationKit.parse_vff_sequence_section","page":"Parser","title":"CellFreeModelGenerationKit.parse_vff_sequence_section","text":"parse_vff_sequence_section(buffer::Array{String,1})::VLResult\n\nParse contents of the sequence section in the model file and extract amino acid and nucleotide sequences for protein and DNA, respectively. The sequence section is written between the tags #TXTL-SEQUENCE::START and #TXTL-SEQUENCE::STOP.\n\nInput arguments: buffer::Array{String,1} - 1-D array holding information extracted from the model file.\n\nOutput arguments: VLResult::VLResult - concrete type holding protein and DNA sequence information.\n\n\n\n\n\n","category":"function"},{"location":"parser/","page":"Parser","title":"Parser","text":"parse_vff_metabolic_section","category":"page"},{"location":"parser/#CellFreeModelGenerationKit.parse_vff_metabolic_section","page":"Parser","title":"CellFreeModelGenerationKit.parse_vff_metabolic_section","text":"parse_vff_metabolic_section(buffer::Array{String,1})::VLResult\n\nParse contents of the metabolic section in the model file and extract all biochemical reactions and molecular species involved in the metabolic network. The metabolic section is written between the tags #METABOLISM::START and #METABOLISM::STOP.\n\nInput arguments: buffer::Array{String,1} - single array holding information extracted from the model file.\n\nOutput arguments: VLResult::VLResult - concrete type holding information on reactions and species involved in metabolism.\n\n\n\n\n\n","category":"function"},{"location":"parser/","page":"Parser","title":"Parser","text":"parse_vff_species_bounds_section","category":"page"},{"location":"parser/#CellFreeModelGenerationKit.parse_vff_species_bounds_section","page":"Parser","title":"CellFreeModelGenerationKit.parse_vff_species_bounds_section","text":"parse_vff_species_bounds_section(buffer::Array{String,1}, metabolic_results_tuple::NamedTuple)::VLResult\n\nParse contents of the model file and extract information on species bounds. The species bounds section is written between the tags #SPECIESBOUNDS::START and #SPECIESBOUNDS::STOP.\n\nInput arguments: buffer::Array{String,1} - 1-D array holding information extracted from the model file.\n\nOutput arguments: VLResult::VLResult - concrete type holding information on species bounds.\n\n\n\n\n\n","category":"function"},{"location":"parser/","page":"Parser","title":"Parser","text":"parse_vff_model_document","category":"page"},{"location":"parser/#CellFreeModelGenerationKit.parse_vff_model_document","page":"Parser","title":"CellFreeModelGenerationKit.parse_vff_model_document","text":"parse_vff_model_document(model::VLAbstractModelObject)::VLResult\n\nParse contents of the model file, extract information from various sections of the file and construct a rudimentary data dictionary.\n\nInput arguments: model::VLAbstractModelObject - abstract Julia data object holding information for generating model code.\n\nOutput arguments: VLResult::VLResult - concrete type holding an intermediate data dictionary construction.\n\n\n\n\n\n","category":"function"}]
}
