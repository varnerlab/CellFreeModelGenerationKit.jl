module CellFreeModelGenerationKit

# include -
include("Include.jl")

# export types -
export VLJuliaModelObject

# parser methods -
export parse_vff_model_document
export parse_vff_metabolic_section
export parse_vff_sequence_section
export parse_vff_bio_types_section
export parse_vff_species_bounds_section
export parse_vff_grn_section
export read_model_document
export generate_default_project

# export methods -
export build_julia_model_object
export generate

# general methods -
export generate_stoichiometric_matrix

# code strategy methods -
export build_data_dictionary_program_component
export build_control_program_component
export build_kinetics_program_component

# advanced: API call back methods -
export reorder_reaction_symbol_array
export reorder_molecular_symbol_array

# export keys -
export ir_master_reaction_table_key
export ir_list_of_molecular_species_key
export ir_list_of_reaction_tags_key
export ir_master_species_bounds_table_key
export ir_sequence_section_table_key

# export Minerva -
export minerva_parser
export minerva_scanner
export minerva_grn_scan_function
export minerva_biological_type_assignment_scan_function
export minerva_bound_type_assignment_scan_function
export minerva_species_bounds_record_parser
export check

end # module
