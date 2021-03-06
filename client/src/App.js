import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import AddResults from "./components/AddResults";
import ShowMarks from "./components/ShowMarks";
import Charts from "./components/Charts";
import AddStudentProfile from "./components/AddStudentProfile";
import StudentsList from "./components/StudentsList";
import GeneratePdf from "./components/GeneratePdf";
import Account from "./components/Account";

import { ThemeProvider, Paper } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import LoginOrRegister from "./components/LoginOrRegister";

function App() {
  const theme = createTheme({
    palette: {
      type: "light",
    },
  });

  const [currentUser, setcurrentUser] = useState();

  // data containing marks uplifted from showMarks component
  const [GlobalTableData, setGlobalTableData] = useState();

  useEffect(() => {
    console.log("setGlobalTableData", GlobalTableData)
  }, [GlobalTableData])

  return (
    <div className="App">
      {!currentUser ? (
        <LoginOrRegister setcurrentUser={setcurrentUser} />
      ) : (
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <Switch>
                <Route exact path="/">
                  <Paper>
                    <AddStudentProfile />
                  </Paper>
                </Route>

                <Route path="/studentsList">
                  <Paper>
                    <StudentsList />
                  </Paper>
                </Route>

                <Route path="/addResults">
                  <Paper>
                    <AddResults />
                  </Paper>
                </Route>

                <Route path="/seeMarks">
                  <Paper>
                    <ShowMarks setGlobalTableData={setGlobalTableData}/>
                  </Paper>
                </Route>

                <Route path="/charts">
                  <Paper>
                    <Charts GlobalTableData={GlobalTableData}/>
                  </Paper>
                </Route>

                <Route path="/generatePdf">
                  <Paper>
                    <GeneratePdf />
                  </Paper>
                </Route>

                <Route path="/account">
                  <Paper>
                    <Account setcurrentUser={setcurrentUser} />
                  </Paper>
                </Route>
              </Switch>
            </Layout>
          </ThemeProvider>
        </Router>
      )}
    </div>
  );
}

export default App;
