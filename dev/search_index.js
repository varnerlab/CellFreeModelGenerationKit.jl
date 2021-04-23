var documenterSearchIndex = {"docs":
[{"location":"#CellFreeModelGenerationKit.jl","page":"Home","title":"CellFreeModelGenerationKit.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A package for building cell-free model code in Julia.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#General-methods","page":"Home","title":"General methods","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"generate","category":"page"},{"location":"#CellFreeModelGenerationKit.generate","page":"Home","title":"CellFreeModelGenerationKit.generate","text":"generate(julia_model_object::VLJuliaModelObject; \n    intermediate_representation_dictionary::Union{Nothing,Dict{String,Any}} = nothing, \n    logger::Union{Nothing,SimpleLogger} = nothing)\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"generate_default_project_file","category":"page"},{"location":"","page":"Home","title":"Home","text":"generate_stoichiometric_matrix","category":"page"},{"location":"#CellFreeModelGenerationKit.generate_stoichiometric_matrix","page":"Home","title":"CellFreeModelGenerationKit.generate_stoichiometric_matrix","text":"generate_stoichiometric_matrix(intermediate_dictionary::Dict{String,Any})::VLResult\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"build_julia_model_object","category":"page"},{"location":"#CellFreeModelGenerationKit.build_julia_model_object","page":"Home","title":"CellFreeModelGenerationKit.build_julia_model_object","text":"build_julia_model_object(path_to_model_file::String, path_to_output_dir::String; \n    defaults_file_name::String=\"Defaults.toml\", model_type::Symbol=:static)::VLResult\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"read_model_document","category":"page"},{"location":"#CellFreeModelGenerationKit.read_model_document","page":"Home","title":"CellFreeModelGenerationKit.read_model_document","text":"read_model_document(path_to_file::String; \n    strip_comments::Bool = true)::Array{String,1}\n\n\n\n\n\n","category":"function"},{"location":"#Code-strategy-methods","page":"Home","title":"Code strategy methods","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"build_data_dictionary_program_component","category":"page"},{"location":"#CellFreeModelGenerationKit.build_data_dictionary_program_component","page":"Home","title":"CellFreeModelGenerationKit.build_data_dictionary_program_component","text":"build_data_dictionary_program_component(intermediate_dictionary::Dict{String,Any})::VLResult\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"build_control_program_component","category":"page"},{"location":"#CellFreeModelGenerationKit.build_control_program_component","page":"Home","title":"CellFreeModelGenerationKit.build_control_program_component","text":"build_control_program_component(intermediate_dictionary::Dict{String,Any})::VLResult\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"build_kinetics_program_component","category":"page"},{"location":"#CellFreeModelGenerationKit.build_kinetics_program_component","page":"Home","title":"CellFreeModelGenerationKit.build_kinetics_program_component","text":"build_kinetics_program_component(intermediate_dictionary::Dict{String,Any})::VLResult\n\n\n\n\n\n","category":"function"},{"location":"#Parser-methods","page":"Home","title":"Parser methods","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"parse_vff_model_document","category":"page"},{"location":"#CellFreeModelGenerationKit.parse_vff_model_document","page":"Home","title":"CellFreeModelGenerationKit.parse_vff_model_document","text":"parse_vff_model_document(model::VLAbstractModelObject)::VLResult\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"parse_vff_metabolic_section","category":"page"},{"location":"#CellFreeModelGenerationKit.parse_vff_metabolic_section","page":"Home","title":"CellFreeModelGenerationKit.parse_vff_metabolic_section","text":"parse_vff_metabolic_section(buffer::Array{String,1})::VLResult\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"parse_vff_sequence_section","category":"page"},{"location":"#CellFreeModelGenerationKit.parse_vff_sequence_section","page":"Home","title":"CellFreeModelGenerationKit.parse_vff_sequence_section","text":"parse_vff_sequence_section(buffer::Array{String,1})::VLResult\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"parse_vff_bio_types_section","category":"page"},{"location":"#CellFreeModelGenerationKit.parse_vff_bio_types_section","page":"Home","title":"CellFreeModelGenerationKit.parse_vff_bio_types_section","text":"parse_vff_bio_types_section(buffer::Array{String,1})::VLResult\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"parse_vff_species_bounds_section","category":"page"},{"location":"#CellFreeModelGenerationKit.parse_vff_species_bounds_section","page":"Home","title":"CellFreeModelGenerationKit.parse_vff_species_bounds_section","text":"parse_vff_species_bounds_section(buffer::Array{String,1}, metabolic_results_tuple::NamedTuple)::VLResult\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"parse_vff_grn_section","category":"page"},{"location":"#CellFreeModelGenerationKit.parse_vff_grn_section","page":"Home","title":"CellFreeModelGenerationKit.parse_vff_grn_section","text":"parse_grn_section(buffer::Array{String,1})::VLResult\n\n\n\n\n\n","category":"function"},{"location":"#Other-Methods","page":"Home","title":"Other Methods","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"reorder_molecular_symbol_array","category":"page"},{"location":"#CellFreeModelGenerationKit.reorder_molecular_symbol_array","page":"Home","title":"CellFreeModelGenerationKit.reorder_molecular_symbol_array","text":"reorder_molecular_symbol_array(symbol_array::Array{String,1}; \n    callback::Union{Function,Nothing} = nothing)::Array{String,1}\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"reorder_reaction_symbol_array","category":"page"},{"location":"#CellFreeModelGenerationKit.reorder_reaction_symbol_array","page":"Home","title":"CellFreeModelGenerationKit.reorder_reaction_symbol_array","text":"reorder_reaction_symbol_array(symbol_array::Array{String,1}; \n    callback::Union{Function,Nothing} = nothing)::Array{String,1}\n\n\n\n\n\n","category":"function"},{"location":"parser/","page":"Parser","title":"Parser","text":"parse_vff_sequence_section","category":"page"},{"location":"parser/","page":"Parser","title":"Parser","text":"parse_vff_metabolic_section","category":"page"},{"location":"parser/","page":"Parser","title":"Parser","text":"parse_vff_species_bounds_section","category":"page"},{"location":"parser/","page":"Parser","title":"Parser","text":"parse_vff_model_document","category":"page"}]
}
