import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardDefault() {
    return (
      <Card className="mt-6 w-50">
        <CardHeader color="blue-gray" className="relative h-45">
          <img
            src="image/rammandir.avif"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-0">
            Ram Mandir
          </Typography>
          <Typography 
            variant="paragraph"
            className="mb-0 !text-grey md:pr-0 xl:pr-0 flex flex-col justify-center"
          >
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot;
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button size="md" color="orange">Read More</Button>
        </CardFooter>
      </Card>
    );
  }