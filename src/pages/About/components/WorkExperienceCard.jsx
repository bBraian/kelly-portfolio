import { Box, Company, Dates, Infos, Location, Period, Row, TitleCard, WorkExperienceCardContainer } from "./WorkExperienceStyle";
import { HiBuildingOffice } from "react-icons/hi2";
import { HiLocationMarker, HiCalendar } from "react-icons/hi";

export function WorkExperienceCard(props) {
    return (
        <WorkExperienceCardContainer>
            <Row>
                <TitleCard>{props.title}</TitleCard>
                <Period>Full Time</Period> 
            </Row>
                
            <Row>
                <Infos align="space-between">
                    <Company>
                        <HiBuildingOffice /> {props.company}
                    </Company>
                    <Location>
                        {props.locale ?  <><HiLocationMarker /> {props.locale}</> : ""}
                       
                    </Location>
                </Infos>
                
                <Infos align="end">
                    <Dates>
                        <HiCalendar /> {props.startDate} - {props.endDate}
                    </Dates>
                </Infos>
            </Row>
        </WorkExperienceCardContainer>
    )
}