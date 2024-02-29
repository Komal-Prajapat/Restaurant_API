import { Employe } from "../model/employeModel.js";

export const addEmployee = async (req, res) => {
  try {
    const {
      employeeId,
      name,
      contactInformation,
      email,
      phone,
      jobDetails,
      compensationAndBenefits,
      employmentStatus,
      salary,
      benefits,
      bonus,
      performanceMetrics,
      kips,
      performanceReviews,
      trainingAndDevelopment,
      leaveAndAttendance,
      reportingStructure,
      personalDetails,
      workplacePreferences,
      employeeFeedbackAndSurveys,
    } = req.body;

    const newEmployee = await Employe.create({
      employeeId,
      name,
      contactInformation,
      email,
      phone,
      jobDetails,
      compensationAndBenefits,
      employmentStatus,
      salary,
      benefits,
      bonus,
      performanceMetrics,
      kips,
      performanceReviews,
      trainingAndDevelopment,
      leaveAndAttendance,
      reportingStructure,
      personalDetails,
      workplacePreferences,
      employeeFeedbackAndSurveys,
    });

    res.json({ newEmployee});
  } catch (error) {
    console.error("Error adding employee:", error.message);
    res.status(500).json({ error: "Error adding employee" });
  }
};
