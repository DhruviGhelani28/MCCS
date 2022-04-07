import { combineReducers } from "@reduxjs/toolkit";
import {
  userLoginReducer,
  userRegisterReducer,
  userApprovalReducer,
  userListReducer,
} from "./userAuthReducer";
import {
  addCountryReducer,
  listCountryReducer,
  addStateReducer,
  listStateReducer,
  changePasswordReducer,
  deleteCountryReducer,
  deleteStateReducer,
  addComplainCategoryReducer,
  addComplainSubCategoryReducer,
  ListComplainCategoryReducer,
  ListComplainSubCategoryReducer,
  DeleteComplainCategoryReducer,
  DeleteComplainSubCategoryReducer,
  AddComplaintRemarksReducer,
  ListComplaintRemarksReducer,
  updateComplaintRemarksReducer,
  updateCountryReducer,
  updateStateReducer,
  UpdateSubCategoryReducer,
  UpdateCategoryReducer,
} from "./adminReducer";
import {
  complaintReducer,
  listComplaintReducer,
  profileAddReducer,
  changeUserPasswordReducer,
  addFeedbackReducer,
  ListFeedbackReducer,
} from "./userReducer";

const reducers = combineReducers({
  userSignin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  userApproval: userApprovalReducer,
  addCountry: addCountryReducer,
  listCountry: listCountryReducer,
  deleteCountryRedu: deleteCountryReducer,
  deleteStateRedu: deleteStateReducer,
  addStateRedu: addStateReducer,
  listStateRedu: listStateReducer,
  passwordChangeRedu: changePasswordReducer,
  addComplaintCategoryR: addComplainCategoryReducer,
  listComplaintCategoryR: ListComplainCategoryReducer,
  deleteComplaintCatR: DeleteComplainCategoryReducer,
  addComplaintSubCR: addComplainSubCategoryReducer,
  listComplaintSubCR: ListComplainSubCategoryReducer,
  deleteComplaintSubCR: DeleteComplainSubCategoryReducer,
  complaintReducer: complaintReducer,
  listComplaintRedu: listComplaintReducer,
  profileAddRedu: profileAddReducer,
  changePasswordUserR: changeUserPasswordReducer,
  AddComplaintRemarksR: AddComplaintRemarksReducer,
  ListComplaintRemarksR: ListComplaintRemarksReducer,
  updateRemarksRedu: updateComplaintRemarksReducer,
  AddFeedbackR: addFeedbackReducer,
  ListFeedbackR: ListFeedbackReducer,
  UpdateStateR: updateStateReducer,
  UpdateCountryR: updateCountryReducer,
  UpdatecatR: UpdateCategoryReducer,
  UpdateSubCatR: UpdateSubCategoryReducer,
});

export default reducers;