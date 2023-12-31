import mongoose from "mongoose";

const otherSchemaUpdated = mongoose.Schema({
  id: String,
  playbook_name: String,
  playbook_class_name: String,
  playbook_display_name: String,
  playbook_path: String,
  playbook_inputs: Number,
  playbook_parameters: Array,
  playbook_vault_password_path: String,
  playbook_module_path: String,
  playbook_placeholders: Array,
  playbook_labels: Array,
});

export default mongoose.model("otherPlaybook", otherSchemaUpdated);
