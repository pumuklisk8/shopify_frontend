import {useLoaderData, type MetaFunction} from '@remix-run/react';
import {Button} from '../components/ui/Button';

export const meta: MetaFunction = () => {
  return [{title: `Hydrogen | Components`}];
};

const colors = () => {
  return (
    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
      <div className="w-10 h-10 bg-foundation-blue-900"></div>
      <div className="w-10 h-10 bg-foundation-blue-800"></div>
      <div className="w-10 h-10 bg-foundation-blue-700"></div>
      <div className="w-10 h-10 bg-foundation-blue-600"></div>
      <div className="w-10 h-10 bg-foundation-blue-500"></div>
      <div className="w-10 h-10 bg-foundation-blue-300"></div>
      <div className="w-10 h-10 bg-foundation-blue-200"></div>
      <div className="w-10 h-10 bg-foundation-blue-100"></div>
      <div className="w-10 h-10 bg-foundation-blue-50"></div>
      <div className="w-10 h-10 bg-foundation-blue-25"></div>
      <div className="w-10 h-10 bg-primary"></div>
      <div className="w-10 h-10 border border-border-gray"></div>
    </div>
  );
};

const typographyRegular = () => {
  return (
    <div>
      <h1>Display / Regular</h1>

      <h1 className="large">Heading Large / Regular</h1>

      <h1 className="small">Heading Small / Regular</h1>

      <h2 className="huge">Subheading Huge / Regular</h2>

      <h2 className="large">Subheading Large / Regular</h2>

      <h2 className="small">Subheading Small / Regular</h2>

      <p className="large">Body Text Large / Regular</p>

      <p className="medium">Body Text Medium / Regular</p>

      <p className="small">Body Text Small / Regular</p>

      <p className="caption">Caption / Regular</p>
    </div>
  );
};

const typographyMedium = () => {
  return (
    <div>
      <h1 className="medium">Display / Medium</h1>

      <h1 className="large-medium">Heading Large / Medium</h1>

      <h1 className="small-medium">Heading Small / Medium</h1>

      <h2 className="huge-medium">Subheading Huge / Medium</h2>

      <h2 className="large-medium">Subheading Large / Medium</h2>

      <h2 className="small-medium">Subheading Small / Medium</h2>

      <p className="large-medium">Body Text Large / Medium</p>

      <p className="medium-medium">Body Text Medium / Medium</p>

      <p className="small-medium">Body Text Small / Medium</p>

      <p className="medium-semibold">Body Text Medium / Semibold</p>

      <p className="caption-medium">Caption / Medium</p>
    </div>
  );
};

export default function Components() {
  return (
    <div>
      {typographyRegular()}
      {typographyMedium()}
      {colors()}
      <Button label="Button" type="small" extraClass="m-10" />
      <Button label="Button" type="large" />
      <Button label="Button" type="huge" extraClass="m-10" />
    </div>
  );
}
