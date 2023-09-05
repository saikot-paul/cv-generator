import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  headerText: {
    fontSize: 25,
    marginBottom: 4,
  },
  headerLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    fontSize: 10,
    textDecoration: "underline",
    color: "blue",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
  },
  sectionHeader: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginTop: 5,
    marginBottom: 5,
  },
  spread: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
  },
  top: {
    fontSize: 12,
    marginBottom: 3,
  },
  bottom: {
    fontSize: 10,
    marginBottom: 6,
  },
  experienceContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 3,
    paddingRight: 3,
  },
  topExperience: {
    marginTop: 4,
    fontSize: 14,
  },
  topProject: {
    marginTop: 8,
    marginBottom: 4,
    fontSize: 14,
  },
  bottomExperience: {
    marginBottom: 4,
    fontSize: 12,
  },
  ul: {
    fontSize: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
});

export const ResumeRenderComp = () => (
  <PDFViewer style={{ width: "100%", height: "100vh" }}>
    <Document title="resume.pdf">
      <Page size="A4">
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.headerText}>John Doe</Text>
            <View style={styles.headerLinks}>
              <Text style={styles.link}>Email |</Text>
              <Text style={styles.link}>Website |</Text>
              <Text style={styles.link}>LinkedIn</Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.sectionHeader}>
              <Text>Education</Text>
            </View>
            <View style={styles.spread}>
              <Text style={styles.top}>University of Nowhere</Text>
              <Text style={styles.top}>Date Start - Date End</Text>
            </View>
            <View style={styles.spread}>
              <Text style={styles.top}>Bachelor's of Doing Nothing</Text>
              <Text style={styles.top}>City, State</Text>
            </View>
            <View style={styles.sectionHeader}>
              <Text>Experience</Text>
            </View>
            <View style={styles.experienceContainer}>
              <View style={styles.spread}>
                <Text style={styles.topExperience}>Position Title</Text>
                <Text style={styles.topExperience}>Start Date - End Date</Text>
              </View>
              <View style={styles.spread}>
                <Text style={styles.bottomExperience}>Company Name</Text>
                <Text style={styles.bottomExperience}>City, State</Text>
              </View>
              <View>
                <View style={styles.ul}>
                  <Text>
                    - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio, perferendis quis. Omnis, autem!
                  </Text>
                  <Text>
                    - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio, perferendis quis. Omnis, autem!
                  </Text>
                  <Text>
                    - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio, perferendis quis. Omnis, autem!
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.experienceContainer}>
              <View style={styles.spread}>
                <Text style={styles.topExperience}>Position Title</Text>
                <Text style={styles.topExperience}>Start Date - End Date</Text>
              </View>
              <View style={styles.spread}>
                <Text style={styles.bottomExperience}>Company Name</Text>
                <Text style={styles.bottomExperience}>City, State</Text>
              </View>
              <View>
                <View style={styles.ul}>
                  <Text>
                    - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio, perferendis quis. Omnis, autem!
                  </Text>
                  <Text>
                    - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio, perferendis quis. Omnis, autem!
                  </Text>
                  <Text>
                    - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio, perferendis quis. Omnis, autem!
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.sectionHeader}>
              <Text>Projects</Text>
            </View>
            <View style={styles.experienceContainer}>
              <View style={styles.spread}>
                <Text style={styles.topProject}>Position Title</Text>
                <Text style={styles.topProject}>Start Date - End Date</Text>
              </View>

              <View>
                <View style={styles.ul}>
                  <Text>
                    - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio, perferendis quis. Omnis, autem!
                  </Text>
                  <Text>
                    - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio, perferendis quis. Omnis, autem!
                  </Text>
                  <Text>
                    - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio, perferendis quis. Omnis, autem!
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default ResumeRenderComp;
